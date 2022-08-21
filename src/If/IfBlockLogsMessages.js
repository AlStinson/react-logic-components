export default {
	childrenNull: 'Error on IfBlock component. Childrens of IfBlock should not be null.',
	childrenIfsComponent: 'Error on IfBlock component. Childrens of IfBlock should only be If, ElseIf or Else components.',
	fstChildren: 'The first element of an IfBlock component should be an If component. Using another one could not work as expected.',
	lstChildren: 'The last element of an IfBlock component should be an ElseIf or an Else component. Using another one could not work as expected.',
	intermediateChildren: 'The intermediates elements of an IfBlock component should be an ElseIf component. Using another one could not work as expected.',
	onlyIf: 'If component dont need to be wrapped in IfBlock if it doesnt have Else or ElseIf components related to it.',
	elementAndChildren: 'Component to render in If, ElseIf or Else components can be set on children or element prop, but element prop will overwrite children when existing. Setting both could not work as expected.',
	noElementOrChildren: 'Component to render in If, ElseIf or Else components can be set on children or element props, but no one has been found. Please set the element to render in element prop or in children.',
};