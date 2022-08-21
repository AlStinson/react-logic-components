import onDevelopment from './DevUtils';

const elementAndChildrenCheck = (props, messages) => {
	onDevelopment(() => {
		const { element, children } = props;
		if (element && children) {
			console.warn(messages.elementAndChildren);
		}
		if (!element && !children) {
			console.warn(messages.noElementOrChildren);
		}
	});
};

export default elementAndChildrenCheck;