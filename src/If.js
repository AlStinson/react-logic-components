import React from 'react';
import PropTypes from 'prop-types';

const If = (props) => {
	return props.condition ? props.children : null;
};

If.propTypes = {
	condition: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
};

const Else = (props) => props.children;

Else.propTypes = {
	children: PropTypes.node.isRequired,
};

const ElseIf = If;

const IfBlock = (props) => {
	const childrenArray = React.Children.toArray(props.children);
	const component = childrenArray.find(
		(children) => children.props.condition || children.type === Else
	);
	return component ?? null;
};

IfBlock.propTypes = {
	children: PropTypes.node,
};

const Ifs = IfBlock;

export {If, Else, ElseIf, IfBlock, Ifs};