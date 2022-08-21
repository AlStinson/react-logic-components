import PropTypes from 'prop-types';
import { elementAndChildrenCheck } from '../utils/Checkers';
import messages from './IfBlockLogsMessages';

const Else = props => {
	elementAndChildrenCheck(props, messages);
	return null;
};

Else.propTypes = {
	element: PropTypes.elementType,
	elementProps: PropTypes.object,
	children: PropTypes.elementType,
};

export default Else;