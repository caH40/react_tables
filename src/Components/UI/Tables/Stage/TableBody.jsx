import React from 'react';

import classes from '../Table.module.css';
import avatar from '../../../images/avatar.svg';

const TableBody = ({ results, category }) => {
	return (
		<tbody>
			{results.map(result => {
				const riderLogo = result.imageSrc ? result.imageSrc : avatar;

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
						<td>{result.watt}</td>
						<td>{result.wattPerKg}</td>
						<td>{result.avgHeartRate}</td>
						<td>{result.weightInGrams}</td>
						<td>{result.heightInCentimeters}</td>
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
