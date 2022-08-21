import { emptyFunc } from './FunctionsUtils';

const onDevelopment = process.env.NODE_ENV === 'production' ? emptyFunc : callback => {callback();};

export default onDevelopment;