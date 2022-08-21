import React from 'react';
import PropTypes from 'prop-types';
import onDevelopment from '../utils/DevUtils';
import { nullFunc } from '../utils/FunctionsUtils';
import messages from './IfBlockLogsMessages';

const If = props => {
	const { condition, element, elementProps, children } = props;

	onDevelopment(() => {
		if (element && children){
			console.warn(messages.elementAndChildren);
		}
	});

	const elementToRender = element ?? children ?? nullFunc;
	return condition ? React.createElement(elementToRender, elementProps) : null;
};

If.propTypes = {
	condition: PropTypes.bool.isRequired,
	element: PropTypes.elementType,
	elementProps: PropTypes.object,
	children: PropTypes.elementType,
};

export default If;