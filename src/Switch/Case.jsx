import PropTypes from 'prop-types';
import { elementAndChildrenCheck } from '../utils/Checkers';
import messages from './SwitchLogsMessages';

const Case = props => {
	elementAndChildrenCheck(props, messages);
	return null;
};

Case.propTypes = {
	value: PropTypes.any,
	element: PropTypes.elementType,
	elementProps: PropTypes.object,
	children: PropTypes.elementType,
};

export default Case;