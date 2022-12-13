import React from 'react';
import { postSprintPoints } from '../../../api/stage-poinst';
import { mountainTable } from '../../../Utils/pointsTable';

const SelectMountainPoints = ({
	name,
	index,
	result,
	results,
	setResults,
	setPopup,
	telegramId,
	password,
}) => {
	const changePlace = e => {
		const tempResults = [...results];

		tempResults.forEach(elm => {
			if (elm.zwiftRiderId === result.zwiftRiderId)
				result.pointsMountain[index].place = e.target.value;
		});
		setResults(tempResults);
		postSprintPoints(
			'pointsMountain',
			name,
			e.target.value,
			result._id,
			telegramId,
			password
		).then(message => setPopup(message));
	};

	return (
		<select
			style={{
				background: result.pointsMountain[index]?.place === 'none' ? '#ffffff' : '#dc4119',
			}}
			onChange={changePlace}
			size="1"
			defaultValue={result.pointsMountain[index]?.place}
		>
			{mountainTable.map(elm => {
				return <option value={elm.place} label={elm.place} key={elm.place} />;
			})}
		</select>
	);
};

export default SelectMountainPoints;
