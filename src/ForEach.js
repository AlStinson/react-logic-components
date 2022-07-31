import React from 'react';

export const ForEach = (props) => {
	const element = props.element ?? props.children ?? (() => {});
	return props.array.map((v, i) => {
		const value = props.nestedValue ? [...props.nestedValue, v] : v;
		const index = props.nestedIndex ? [...props.nestedIndex, i] : i;

		if (element.type === ForEach) {
			const forEachProps = {
				...element.props,
				nestedValue: props.nestedValue ? value : [value],
				nestedIndex: props.nestedIndex ? index : [index],
				propsToPropagate: {
					...props.propsToPropagate,
					...element.props.propsToPropagate
				},
				key: index
			};
			return <ForEach {...forEachProps} />;
		} else {
			const elementProps = { ...props.propsToPropagate, index, value };
			return element(elementProps);
		}
	});
};
