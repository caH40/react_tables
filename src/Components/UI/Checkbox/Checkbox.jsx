import React from 'react';
import classes from './Checkbox.module.css';

const Checkbox = ({ label, settings, id, updateSettings }) => {
	return (
		<div className={classes.checkbox}>
			<label className="classes.label" id={id}>
				{label}
				<input
					className={classes.input}
					type={'checkbox'}
					checked={!settings[id]}
					onChange={updateSettings}
					id={id}
				/>
				<span className={classes.switch_left} />
				<span className={classes.switch_right} />
			</label>
		</div>
	);
};

export default Checkbox;
