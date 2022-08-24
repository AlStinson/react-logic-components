import PropTypes from 'prop-types';
import { elementAndChildrenCheck } from '../utils/Checkers';
import messages from './SwitchLogsMessages';

const Default = props => {
	elementAndChildrenCheck(props, messages);
	return null;
};

Default.propTypes = {
	element: PropTypes.elementType,
	elementProps: PropTypes.object,
	children: PropTypes.elementType,
};

export default Default;