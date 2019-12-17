import React from 'react';
import PropTypes from 'prop-types';

const Selectbox = ({ options, classes, handleOnChange }) => {
	const CreateOptions = options =>
	options.map(o => (
		<option value ={o.value} key={o.value}>
			{o.label}
		</option>
	));

	return (
		<select onChange={e => handleOnChange(e.target.value)} className={classes}>
			{CreateOptions(options)}
		</select>
	);
};

Selectbox.propTypes = {
	options: PropTypes.array.isRequired,
	classes: PropTypes.string,
	handleOnChange: PropTypes.func.isRequired
};

export default Selectbox;