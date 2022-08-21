export default {
	elementAndChildren: 'Component to render in ForEach components can be set on children or element prop, but element prop will overwrite children when existing. Setting both could not work as expected.',
	noElementOrChildren: 'Component to render in ForEach components can be set on children or element props, but no one has been found. Please set the element to render in element prop or in children.',
	onlyValidReactElement: 'Component to render in ForEach component should be a elementType (Component, not <Component/>) or a ForEach nested component. Please use <ForEach ... element={Component} propToPropagate={props}/> instead of <ForEach ...> <Component ...props/> </ForEach>.',
	noInvalidPrerender: 'When severals ForEach components are nested, all of them except the top one should have the prop nestedForEach to avoid rendering childs with non expected values',
	noIterableItem: 'Invalid prop ´of´ supplied to ´ForEach´. It should be an iterable item, like Array or Map, but not object.'
};