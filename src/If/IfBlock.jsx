import React from 'react';
import PropTypes from 'prop-types';
import onDevelopment from '../utils/DevUtils';
import messages from './IfBlockLogsMessages';
import Else from './Else';
import ElseIf from './ElseIf';
import If from './If';
import { nullFunc } from '../utils/FunctionsUtils';

const validChildrens = [If, ElseIf, Else];

const IfBlock = props => {
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
			if (i == 0 && type !== If) {
				console.warn(messages.fstChildren);
			}
			if (childrenLength === 1 && type === If) {
				console.warn(messages.onlyIf);
			}
			if (i == (childrenLength - 1) && type === If) {
				console.warn(messages.lstChildren);
			}
			if (i > 0 && i < (childrenLength - 1) && type !== ElseIf) {
				console.warn(messages.intermediateChildren);
			}
		});

		if (type === If && childrenProps.condition) {
			return children;
		}

		if (type === Else || childrenProps.condition) {
			const elementToRender = childrenProps.element ?? childrenProps.children ?? nullFunc;
			return React.createElement(elementToRender, childrenProps.elementProps);
		}
	}

	return null;
};

IfBlock.propTypes = {
	children: PropTypes.node,
};

export default IfBlock;