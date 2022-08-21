import PropTypes from 'prop-types';
import onDevelopment from '../utils/DevUtils';
import messages from './IfBlockLogsMessages';

const Else = props => {
  
	onDevelopment(() => {
		const { element, children } = props;
		if (element && children){
			console.warn(messages.elementAndChildren);
		}
	});

	return null;
};

Else.propTypes = {
	element: PropTypes.elementType,
	elementProps: PropTypes.object,
	children: PropTypes.elementType,
};

export default Else;