import PropTypes from 'prop-types';
import messages from './IfBlockLogsMessages';
import elementAndChildrenCheck from '../utils/ElementAndChildrenCheck';

const ElseIf = props => {
	elementAndChildrenCheck(props, messages);
	return null;
};

ElseIf.propTypes = {
	condition: PropTypes.bool.isRequired,
	element: PropTypes.elementType,
	elementProps: PropTypes.object,
	children: PropTypes.elementType,
};

export default ElseIf;