export default {
	elementAndChildren: 'Component to render in For components can be set on children or element prop, but element prop will overwrite children when existing. Setting both could not work as expected.',
	noElementOrChildren: 'Component to render in For components can be set on children or element props, but no one has been found. Please set the element to render in element prop or in children.',
	noForReactElement: 'Component to render in For component should be a elementType (Component, not <Component/>) or a For nested component. Please use <For ... element={Component} propToPropagate={props}/> instead of <For ...> <Component ...props/> </For>.',
	nestedFor: 'When severals For components are nested, all of them except the top one should have the prop nestedFor to avoid rendering childs with non expected index',
};