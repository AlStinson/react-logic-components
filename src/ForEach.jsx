import React from 'react';
import PropTypes from 'prop-types';

const ForEach = (props) => {

	const { array, propsToPropagate, keyFunc, nestedIndex, nestedValue } = props;
	const element = props.element ?? props.children;

	return array.map((v, i) => {
		const value = nestedValue ? [...nestedValue, v] : v;
		const index = nestedIndex ? [...nestedIndex, i] : i;

		if (element.type === ForEach) {
			const forEachProps = {
				...element.props,
				key: keyFunc(value, index),
				nestedValue: nestedValue ? value : [value],
				nestedIndex: nestedIndex ? index : [index],
				propsToPropagate: {
					...propsToPropagate,
					...element.props.propsToPropagate
				},
			};
			return <ForEach {...forEachProps} />;
		} else {
			const elementProps = { 
				...propsToPropagate, 
				index, 
				value,
				key: keyFunc(value, index),
			};
			return React.createElement(element, elementProps);
		}
	});
};

ForEach.propTypes = {
	element: PropTypes.elementType,
	array: PropTypes.array.isRequired,
	children: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),
	propsToPropagate: PropTypes.object,
	keyFunc: PropTypes.func,
	nestedIndex: PropTypes.arrayOf(PropTypes.number),
	nestedValue: PropTypes.arrayOf(PropTypes.any),
};

ForEach.defaultProps = {
	children: () => { },
	keyFunc: (value, index) => index,
};

export default ForEach;
