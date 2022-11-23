import React from 'react';
import { postStagePenalty } from '../../../api/stage-penalty';
import cls from './SelectPenalty.module.css';

const SelectPenalty = ({ result, defaultValue, zwiftId, setPopup, results, setResults }) => {
	const changePenalty = e => {
		const newPenalty = Number(e.target.value);

		let resultsChanged = [];
		results.forEach(result => {
			if (result.zwiftRiderId === zwiftId) result.penalty = newPenalty;
			resultsChanged.push(result);
		});
		setResults(resultsChanged);

		postStagePenalty(newPenalty, result._id).then(data => setPopup(data));
	};

	return (
		<select
			onChange={changePenalty}
			name="penalty"
			size="1"
			defaultValue={defaultValue}
			className={defaultValue === 0 ? '' : cls.hasPenalty}>
			<option value="0" label="нет" />
			<option className={cls.hasPenalty} value="1" label="1 PU" />
			<option className={cls.hasPenalty} value="2" label="2 PU" />
			<option className={cls.hasPenalty} value="3" label="3 PU" />
			<option className={cls.hasPenalty} value="4" label="4 PU" />
			<option className={cls.hasPenalty} value="5" label="5 PU" />
		</select>
	);
};

export default SelectPenalty;
