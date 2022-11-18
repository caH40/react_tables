import React from 'react';

import classes from '../Table.module.css';
import avatar from '../../../images/avatar.svg';

const TableBody = ({ results, category }) => {
	return (
		<tbody>
			{results.map(result => {
				const riderLogo = result.imageSrc ? result.imageSrc : avatar;
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

				return (
					<tr key={result._id}>
						{category === 'T' ? <td>{result.placeAbsolute}</td> : <td>{result.placeCategory}</td>}
						{/* <td>{result.category}</td> */}
						<td className={classes.rider}>
							<img className={classes.logo} src={riderLogo} alt="Ph" /> <span>{result.name}</span>
						</td>

						<td>
							{result.time.includes('.')
								? [
										result.time.split('.')[0],
										<span className={classes.thousandthsSecond} key={Date.now()}>
											.{result.time.split('.')[1]}
										</span>,
								  ]
								: result.time}
						</td>
						<td>{result.gap}</td>
						<td>{result.gapPrev}</td>
						<td>{watt}</td>
						<td>{wattPerKg}</td>
						<td>{avgHeartRate}</td>
						<td>{weightInGrams}</td>
						<td>{heightInCentimeters}</td>
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
