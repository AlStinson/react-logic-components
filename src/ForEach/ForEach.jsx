import React from 'react';
import PropTypes from 'prop-types';
import { nullFunc } from '../utils/FunctionsUtils';
import { elementAndChildrenCheck, elementToRenderCheck } from '../utils/Checkers';
import messages from './ForEachLogsMessages';

const ForEach = props => {

	const { iterable, itemToValue, element, children, propsToPropagate, valueToProps, nestedValue, nestedForEach } = props;

	if (nestedForEach) {
		return null;
	}

	const elementToRender = element ?? children ?? nullFunc;
	const childrens = [];
	let index = 0;

	elementAndChildrenCheck(props, messages);
	elementToRenderCheck(elementToRender, ForEach, 'nestedForEach', messages);

	for (const item of iterable) {
		const transformedItem = itemToValue(item, index, iterable);
		const value = nestedValue ? [...nestedValue, transformedItem] : transformedItem;
		const elementProps = {
			key: index,
			...propsToPropagate,
			...valueToProps(value, index, iterable),
		};

		if (elementToRender.type === ForEach) {
			const forEachProps = {
				...elementToRender.props,
				...elementProps,
				nestedForEach: false,
				nestedValue: nestedValue ? value : [value],
			};
			childrens.push(<ForEach {...forEachProps} />);
		} else {
			childrens.push(React.createElement(elementToRender, elementProps));
		}

		index++;
	}

	return childrens;
};

ForEach.propTypes = {
	iterable: (props, propName) => {
		if (!props[propName][Symbol.iterator]) {
			return new Error(messages.noIterableItem);
		}
	},
	element: PropTypes.elementType,
	children: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),
	itemToValue: PropTypes.func.isRequired,
	propsToPropagate: PropTypes.object,
	valueToProps: PropTypes.func,
	nestedForEach: PropTypes.bool,
	nestedValue: PropTypes.arrayOf(PropTypes.any),
};

ForEach.defaultProps = {
	itemToValue: value => value,
	valueToProps: (value, index) => ({ value, index }),
};

export default ForEach;
