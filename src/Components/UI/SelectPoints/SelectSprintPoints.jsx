import React from 'react';
import { sprintTable } from '../../../Utils/points';

const SelectSprintPoints = ({ name, index, result, results, setResults }) => {
	const changePlace = e => {
		const tempResults = [...results];

		tempResults.forEach(elm => {
			if (elm.zwiftRiderId === result.zwiftRiderId)
				result.pointsSprint[index].place = e.target.value;
		});
		setResults(tempResults);
	};

	// console.log(result);

	return (
		<select onChange={changePlace} size="1" defaultValue={result.pointsSprint[index].place}>
			{sprintTable.map(elm => {
				return <option value={elm.place} label={elm.place} key={elm.place} />;
			})}
		</select>
	);
};

export default SelectSprintPoints;
