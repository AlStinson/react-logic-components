import React from 'react';
import PropTypes from 'prop-types';

const For = (props) => {

	const {
		start,
		maxValue,
		decrement,
		nestedIndex,
		propsToPropagate
	} = props;

	const element = props.element ?? props.children;

	const childrens = [];
	for (let i = start; i <= maxValue; decrement ? i-- : i++) {
		const index = nestedIndex ? [...nestedIndex, i] : i;
		if (element.type === For) {
			const forProps = {
				...element.props,
				key: index,
				nestedIndex: nestedIndex ? index : [index],
				propsToPropagate: {
					...propsToPropagate,
					...element.props.propsToPropagate
				},
			};
			childrens.push(<For {...forProps} />);
		} else {
			const elementProps = {
				...propsToPropagate,
				key: index,
				index
			};
			childrens.push(React.createElement(element, elementProps));
		}
	}
	return childrens;
};

For.propTypes = {
	start: PropTypes.number,
	maxValue: PropTypes.number.isRequired,
	decrement: PropTypes.bool,
	element: PropTypes.elementType,
	children: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),
	propsToPropagate: PropTypes.object,
	nestedIndex: PropTypes.arrayOf(PropTypes.number),
};

For.defaultProps = {
	start: 0,
	children: () => { },
};

export default For;
