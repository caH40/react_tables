import React from 'react';

const Checkbox = ({ label, settings, id, updateSettings }) => {
	return (
		<div className="checkbox">
			<label className="checkbox__label" id={id}>
				{label}
				<input
					className="checkbox__input"
					type={'checkbox'}
					checked={!settings[id]}
					onChange={updateSettings}
					id={id}
				/>
				<span className="checkbox__switch-left" />
				<span className="checkbox__switch-right" />
			</label>
		</div>
	);
};

export default Checkbox;
