import React from 'react';
import PropTypes from 'prop-types';
import { elementAndChildrenCheck, elementToRenderCheck } from '../utils/Checkers';
import { nullFunc } from '../utils/FunctionsUtils';
import messages from './ForLogsMessages';

const For = (props) => {

	const { from, to, step, element, children, propsToPropagate, indexToProps, nestedIndex, nestedFor } = props;

	if (nestedFor) {
		return null;
	}

	const elementToRender = element ?? children ?? nullFunc;
	const childrens = [];

	elementAndChildrenCheck(props, messages);
	elementToRenderCheck(elementToRender, For, 'nestedFor', messages);

	// TODO: check if for loop will stop;
	// TODO: auto step decrement; 
	for (let i = from; i <= to; i += step) {
		const index = nestedIndex ? [...nestedIndex, i] : i;
		const elementProps = {
			key: index,
			...propsToPropagate,
			...indexToProps(index),
		};

		if (elementToRender.type === For) {
			const forProps = {
				...elementToRender.props,
				...elementProps,
				nestedFor: false,
				nestedIndex: nestedIndex ? index : [index],
			};
			childrens.push(<For {...forProps} />);
		} else {
			childrens.push(React.createElement(elementToRender, elementProps));
		}
	}
	return childrens;
};

For.propTypes = {
	from: PropTypes.number.isRequired,
	to: PropTypes.number.isRequired,
	step: PropTypes.number.isRequired,
	element: PropTypes.elementType,
	children: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),
	propsToPropagate: PropTypes.object,
	indexToProps: PropTypes.func,
	nestedFor: PropTypes.bool,
	nestedIndex: PropTypes.arrayOf(PropTypes.number),
};

For.defaultProps = {
	step: 1,
	indexToProps: index => ({ index }),
};

export default For;
