import React from 'react';

import classes from '../Table.module.css';
import avatar from '../../images/avatar.svg';

import SelectSprintPoints from '../../UI/SelectPoints/SelectSprintPoints';
import SelectMountainPoints from '../../UI/SelectPoints/SelectMountainPoints';
import SelectCategory from '../../UI/SelectCategory/SelectCategory';

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
				const watt = String(result.watt).includes('max') ? (
					<span className="maxRed">
						{result.watt.replace('max', '')}
						<small>w</small>
					</span>
				) : (
					<span>
						{result.watt}
						<small>w</small>
					</span>
				);
				const wattPerKg = String(result.wattPerKg).includes('max') ? (
					<span className="maxRed">
						{result.wattPerKg.replace('max', '')}
						<small>w/kg</small>
					</span>
				) : (
					<span>
						{result.wattPerKg}
						<small>w/kg</small>
					</span>
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
				const avgHeartRate = result.avgHeartRate ? (
					<span>
						{result.avgHeartRate}
						<small>bpm</small>
					</span>
				) : (
					''
				);
				const weightInGrams = result.weightInGrams ? (
					<span>
						{result.weightInGrams}
						<small>kg</small>
					</span>
				) : (
					''
				);
				const heightInCentimeters = result.heightInCentimeters ? (
					<span>
						{result.heightInCentimeters}
						<small>cm</small>
					</span>
				) : (
					''
				);
				// 	<td>
				// 	<span dangerouslySetInnerHTML={{ __html: result.wattPerKg }}></span>
				// 	<small>w/kg</small>
				// </td>

				return (
					<tr key={result._id}>
						<td>{result.placeAbsolute}</td>
						<td>{category}</td>
						<td>{watt}</td>
						<td>{wattPerKg}</td>
						<td>{rider}</td>
						{selectSprint}
						{selectMountain}
						<td>{time}</td>
						<td>{avgHeartRate}</td>
						<td>{weightInGrams}</td>
						<td>{heightInCentimeters}</td>
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableStageEditBody;
