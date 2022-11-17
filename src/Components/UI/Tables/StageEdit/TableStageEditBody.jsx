import React from 'react';

import classes from '../Table.module.css';
import avatar from '../../../images/avatar.svg';
import SelectCategory from '../../SelectCategory/SelectCategory';
import SelectSprintPoints from '../../SelectSprintPoints/SelectSprintPoints';

const TableStageEditBody = ({ results, setPopup, changeCategory, setResults }) => {
	return (
		<tbody>
			{results.map(result => {
				const category = (
					<div className={classes.category}>
						{
							<SelectCategory
								results={results}
								setResults={setResults}
								changeCategory={changeCategory}
								setPopup={setPopup}
								zwiftId={result.zwiftRiderId}
								stageId={result.stageId}
								defaultValue={result.category}
							/>
						}
					</div>
				);
				const sprintFirst = (
					<div>
						<SelectSprintPoints />
					</div>
				);

				const riderLogo = result.imageSrc ? result.imageSrc : avatar;
				const rider = (
					<div className={classes.rider}>
						<img className={classes.logo} src={riderLogo} alt="Ph" /> <span>{result.name}</span>
					</div>
				);
				const time = result.time.includes('.')
					? [
							result.time.split('.')[0],
							<span className={classes.thousandthsSecond} key={Date.now()}>
								.{result.time.split('.')[1]}
							</span>,
					  ]
					: result.time;
				return (
					<tr key={result._id}>
						<td>{result.placeAbsolute}</td>
						<td>{category}</td>
						<td>{result.watt}</td>
						<td>{result.wattPerKg}</td>
						<td>{rider}</td>
						<td>{sprintFirst}</td>
						<td>Place</td>
						<td>Place</td>
						<td>{time}</td>
						<td>{result.avgHeartRate}</td>
						<td>{result.weightInGrams}</td>
						<td>{result.heightInCentimeters}</td>
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableStageEditBody;
