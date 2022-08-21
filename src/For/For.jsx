import React from 'react';
import PropTypes from 'prop-types';
import elementAndChildrenCheck from '../utils/ElementAndChildrenCheck';
import { nullFunc } from '../utils/FunctionsUtils';
import onDevelopment from '../utils/DevUtils';
import messages from './ForLogsMessages';

const For = (props) => {

	const { from, to, step, element, children, propsToPropagate, indexToProps, indexToKey, nestedIndex, nestedFor } = props;

	if (nestedFor) {
		return null;
	}

	elementAndChildrenCheck(props, messages);
	const elementToRender = element ?? children ?? nullFunc;

	onDevelopment(() => {
		if (React.isValidElement(elementToRender) && elementToRender.type !== For) {
			console.error(messages.noForReactElement);
		}
		if (elementToRender.type === For && !elementToRender.props.nestedFor) {
			console.error(messages.nestedFor);
		}
	});

	const childrens = [];
	for (let i = from; i <= to; i += step) {
		const index = nestedIndex ? [...nestedIndex, i] : i;
		const elementProps = {
			...propsToPropagate,
			...indexToProps(index),
			key: indexToKey(index),
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
	step: PropTypes.number,
	element: PropTypes.elementType,
	children: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),
	propsToPropagate: PropTypes.object,
	indexToProps: PropTypes.func,
	indexToKey: PropTypes.func,
	nestedFor: PropTypes.bool,
	nestedIndex: PropTypes.arrayOf(PropTypes.number),
};

For.defaultProps = {
	step: 1,
	indexToProps: index => ({ index }),
	indexToKey: index => index,
};

export default For;
