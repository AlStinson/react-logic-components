import React from 'react';
import onDevelopment from './DevUtils';

export const elementAndChildrenCheck = (props, messages) => onDevelopment(() => {
	const { element, children } = props;
	if (element && children) {
		console.warn(messages.elementAndChildren);
	}
	if (!element && !children) {
		console.warn(messages.noElementOrChildren);
	}
});


export const elementToRenderCheck = (elementToRender, validType, childrenProp, messages) => onDevelopment(() => {
	if (React.isValidElement(elementToRender) && elementToRender.type !== validType) {
		console.error(messages.onlyValidReactElement);
	}
	if (elementToRender.type === validType && !elementToRender.props[childrenProp]) {
		console.error(messages.noInvalidPrerender);
	}
});
