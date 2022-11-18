import React from 'react';

import classes from '../Table.module.css';
import SelectSprintPoints from '../../UI/SelectPoints/SelectSprintPoints';
import SelectMountainPoints from '../../UI/SelectPoints/SelectMountainPoints';
import SelectCategory from '../../UI/SelectCategory/SelectCategory';
import { tdRider, tdTime, valueMax } from '../../../Utils/table';

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
							name={elm}
							index={index}
							result={result}
							results={results}
							setResults={setResults}
							setPopup={setPopup}
						/>
					</td>
				));
				const selectMountain = result.quantityMountains.map((elm, index) => (
					<td key={elm}>
						<SelectMountainPoints
							name={elm}
							index={index}
							result={result}
							results={results}
							setResults={setResults}
							setPopup={setPopup}
						/>
					</td>
				));
				return (
					<tr key={result._id}>
						<td>{result.placeAbsolute}</td>
						<td>{category}</td>
						<td>{valueMax(result.watt, 'w')}</td>
						<td>{valueMax(result.wattPerKg, 'w/kg')}</td>
						<td>{tdRider(result.name, result.imageSrc)}</td>
						{selectSprint}
						{selectMountain}
						<td>{tdTime(result.time)}</td>
						<td>{valueMax(result.avgHeartRate, 'bpm')}</td>
						<td>{valueMax(result.weightInGrams, 'kg')}</td>
						<td>{valueMax(result.heightInCentimeters, 'cm')}</td>
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableStageEditBody;
