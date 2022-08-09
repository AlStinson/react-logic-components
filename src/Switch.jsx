import React from 'react';
import PropTypes from 'prop-types';

const Switch = (props) => {
	const childrensArray = React.Children.toArray(props.children);
	const output = childrensArray.find(
		(children) => children.props.value === props.value && children.type === Case
	);
	const defaultChildren = childrensArray.find(
		(children) => children.type === Default
	);
	return output ?? defaultChildren ?? null;
};

Switch.propTypes = {
	value: PropTypes.any.isRequired,
	children: PropTypes.node.isRequired,
};


const Case = (props) => props.children;

Case.propTypes = {
	children: PropTypes.node,
};

const Default = (props) => props.children;

Default.propTypes = {
	children: PropTypes.node,
};

export { Switch, Case, Default };