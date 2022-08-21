import PropTypes from 'prop-types';
import elementAndChildrenCheck from '../utils/ElementAndChildrenCheck';
import messages from './SwitchLogsMessages';

const Case = props => {
	elementAndChildrenCheck(props, messages);
	return null;
};

Case.propTypes = {
	element: PropTypes.elementType,
	elementProps: PropTypes.object,
	children: PropTypes.elementType,
};

export default Case;