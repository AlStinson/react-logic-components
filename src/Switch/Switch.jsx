import React from 'react';
import PropTypes from 'prop-types';
import messages from './SwitchLogsMessages';
import Case from './Case';
import Default from './Default';
import onDevelopment from '../utils/DevUtils';
import { nullFunc } from '../utils/FunctionsUtils';

const validChildrens = [Case, Default];

const Switch = props => {
	const childrens = props.children;
	const childrenArray = React.Children.toArray(childrens);
	const childrenLength = childrenArray.length;
	for (let i = 0; i < childrenLength; i++) {
		const children = childrenArray[i];

		if (children == null) {
			onDevelopment(() => console.error(messages.childrenNull));
			continue;
		}

		const { props: childrenProps, type } = children;

		if (!validChildrens.includes(type)) {
			onDevelopment(() => console.error(messages.childrenIfsComponent));
			continue;
		}

		onDevelopment(() => {
			if (i != (childrenLength - 1) && type === Default) {
				console.warn(messages.defaultNotLast);
			}
		});

		if (type === Default || childrenProps.value === props.value) {
			const elementToRender = childrenProps.element ?? childrenProps.children ?? nullFunc;
			return React.createElement(elementToRender, childrenProps.elementProps);
		}
	}

	return null;
};

Switch.propTypes = {
	value: PropTypes.any,
	children: PropTypes.node,
};

export default Switch;