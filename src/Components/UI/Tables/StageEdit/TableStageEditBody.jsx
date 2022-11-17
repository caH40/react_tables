import React from 'react';

import classes from '../Table.module.css';
import avatar from '../../../images/avatar.svg';
import SelectCategory from '../../SelectCategory/SelectCategory';
import SelectSprintPoints from '../../SelectPoints/SelectSprintPoints';
import SelectMountainPoints from '../../SelectPoints/SelectMountainPoints';

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
								key={result._id}
							/>
						}
					</div>
				);

				const selectSprint = result.quantitySprints.map((elm, index) => (
					<td key={elm}>
						<SelectSprintPoints
							index={index}
							result={result}
							results={results}
							setResults={setResults}
						/>
					</td>
				));
				const selectMountain = result.quantityMountains.map((elm, index) => (
					<td key={elm}>
						<SelectMountainPoints
							index={index}
							result={result}
							results={results}
							setResults={setResults}
							key={elm}
						/>
					</td>
				));

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
						{selectSprint}
						{selectMountain}
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
