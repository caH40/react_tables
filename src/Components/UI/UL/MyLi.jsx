import React from 'react';

import cls from './MyLi.module.css';

const MyLi = ({ newResult, setNewResult, variable, type, label, disabled }) => {
	return (
		<li className={cls.item}>
			<span className={cls.labelItem}>{label}:</span>
			<input
				onChange={e =>
					setNewResult(prev => ({
						...prev,
						[variable]: type === 'number' ? +e.target.value : e.target.value,
					}))
				}
				value={newResult[variable]}
				type={type}
				className={cls.valueItemInput}
				disabled={disabled}
			/>
		</li>
	);
};

export default MyLi;
