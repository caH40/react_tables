import React from 'react';
import { postSprintPoints } from '../../../api/stage-poinst';
import { sprintTable } from '../../../Utils/points';

const SelectSprintPoints = ({ name, index, result, results, setResults, setPopup }) => {
	const changePlace = e => {
		const tempResults = [...results];

		tempResults.forEach(elm => {
			if (elm.zwiftRiderId === result.zwiftRiderId)
				result.pointsSprint[index].place = e.target.value;
		});
		setResults(tempResults);
		postSprintPoints('pointsSprint', name, e.target.value, result._id).then(message =>
			setPopup(message)
		);
	};

	return (
		<select
			style={{
				background: result.pointsSprint[index].place === 'none' ? '#ffffff' : '#58c34e',
			}}
			onChange={changePlace}
			size="1"
			defaultValue={result.pointsSprint[index].place}>
			{sprintTable.map(elm => {
				return <option value={elm.place} label={elm.place} key={elm.place} />;
			})}
		</select>
	);
};

export default SelectSprintPoints;
