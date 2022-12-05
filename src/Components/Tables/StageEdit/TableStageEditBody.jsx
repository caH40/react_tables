import React from 'react';

import SelectSprintPoints from '../../UI/SelectPoints/SelectSprintPoints';
import SelectMountainPoints from '../../UI/SelectPoints/SelectMountainPoints';
import SelectCategory from '../../UI/SelectCategory/SelectCategory';
import { tdLinkZP, tdRider, tdTime, valueMax } from '../../../Utils/table';
import SelectPenalty from '../../UI/SelectPenalty/SelectPenalty';
import Spinner from '../../UI/Spinner/Spinner';
import CheckboxDq from '../../UI/CheckboxDq/CheckboxDq';

const TableStageEditBody = ({ results, setPopup, setResults, isLoading, telegramId, password }) => {
	return (
		<tbody>
			<tr>
				<td colSpan={10}>
					<Spinner isLoading={isLoading} />
				</td>
			</tr>
			{results.map(result => {
				const category = (
					<div>
						{
							<SelectCategory
								results={results}
								setResults={setResults}
								setPopup={setPopup}
								zwiftId={result.zwiftRiderId}
								stageId={result.stageId}
								defaultValue={result.category}
								key={result._id}
								telegramId={telegramId}
								password={password}
							/>
						}
					</div>
				);
				const penalty = (
					<div>
						{
							<SelectPenalty
								result={result}
								results={results}
								setResults={setResults}
								setPopup={setPopup}
								zwiftId={result.zwiftRiderId}
								defaultValue={result.penalty.powerUp}
								key={result._id}
								telegramId={telegramId}
								password={password}
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
							telegramId={telegramId}
							password={password}
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
							telegramId={telegramId}
							password={password}
						/>
					</td>
				));
				return (
					<tr key={result._id}>
						<td>
							<CheckboxDq
								result={result}
								results={results}
								setResults={setResults}
								setPopup={setPopup}
								telegramId={telegramId}
								password={password}
							/>
						</td>
						<td>{penalty}</td>
						<td>{result.placeAbsolute}</td>
						<td>{category}</td>
						<td>{valueMax(result.watt, 'w')}</td>
						<td>{valueMax(result.wattPerKg, 'w/kg')}</td>
						<td>{tdRider(result.name, result.imageSrc)}</td>
						{selectSprint}
						{selectMountain}
						<td>{tdLinkZP(result.zwiftRiderId)}</td>
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
