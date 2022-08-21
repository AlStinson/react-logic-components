export default {
	childrenNull: 'Error on Switch component. Childrens of Switch should not be null.',
	childrenIfsComponent: 'Error on Switch component. Childrens of Switch should only be Case or Default components.',
	defaultNotLast: 'The Default component should be the last one in a Switch component. Setting it earlier con not work as expected.',
	elementAndChildren: 'Component to render in Case or Default components can be set on children or element prop, but element prop will overwrite children when existing. Setting both could not work as expected.',
	noElementOrChildren: 'Component to render in Case or Default components can be set on children or element props, but no one has been found. Please set the element to render in element prop or in children',
};