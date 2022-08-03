import React from 'react';
import PropTypes from 'prop-types';

const ForEach = (props) => {

	const { propsToPropagate, nestedIndex, nestedValue } = props;
	const element = props.element ?? props.children;

	return props.array.map((v, i) => {
		const value = nestedValue ? [...nestedValue, v] : v;
		const index = nestedIndex ? [...nestedIndex, i] : i;

		if (element.type === ForEach) {
			const forEachProps = {
				...element.props,
				nestedValue: nestedValue ? value : [value],
				nestedIndex: nestedIndex ? index : [index],
				propsToPropagate: {
					...propsToPropagate,
					...element.props.propsToPropagate
				},
				key: index
			};
			return <ForEach {...forEachProps} />;
		} else {
			const elementProps = { ...propsToPropagate, index, value };
			return element(elementProps);
		}
	});
};

ForEach.propTypes = {
	element: PropTypes.elementType,
	children: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),
	propsToPropagate: PropTypes.object,
	nestedIndex: PropTypes.arrayOf(PropTypes.number),
	nestedValue: PropTypes.arrayOf(PropTypes.any),
};

ForEach.defaultProps = {
	children: () => { },
};

export default ForEach;
