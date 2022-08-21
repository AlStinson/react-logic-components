import PropTypes from 'prop-types';
import messages from './IfBlockLogsMessages';
import onDevelopment from '../utils/DevUtils';

const ElseIf = props => {
  
	onDevelopment(() => {
		const { element, children } = props;
		if (element && children){
			console.warn(messages.elementAndChildren);
		}
	});

	return null;
};

ElseIf.propTypes = {
	condition: PropTypes.bool.isRequired,
	element: PropTypes.elementType,
	elementProps: PropTypes.object,
	children: PropTypes.elementType,
};

export default ElseIf;