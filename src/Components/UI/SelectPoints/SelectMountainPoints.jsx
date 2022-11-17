import React from 'react';
import { postSprintPoints } from '../../../api/stage-poinst';
import { mountainTable } from '../../../Utils/points';

const SelectMountainPoints = ({ name, index, result, results, setResults, setPopup }) => {
	const changePlace = e => {
		const tempResults = [...results];

		tempResults.forEach(elm => {
			if (elm.zwiftRiderId === result.zwiftRiderId)
				result.pointsMountain[index].place = e.target.value;
		});
		setResults(tempResults);
		postSprintPoints('pointsMountain', name, e.target.value, result._id).then(message =>
			setPopup(message)
		);
	};

	// console.log(result[0]);

	return (
		<select onChange={changePlace} size="1" defaultValue={result.pointsMountain[index].place}>
			{mountainTable.map(elm => {
				return <option value={elm.place} label={elm.place} key={elm.place} />;
			})}
		</select>
	);
};

export default SelectMountainPoints;
