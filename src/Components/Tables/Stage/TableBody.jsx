import React from 'react';

import classes from '../Table.module.css';
import { tdCategory, tdGap, tdRider, tdTime, valueMax } from '../../../Utils/table';

const TableBody = ({ results, category }) => {
	return (
		<tbody>
			{results.map(result => {
				return (
					<tr key={result._id}>
						<td>{tdCategory(result, category)}</td>
						<td>{tdRider(result.name, result.imageSrc)}</td>
						<td>{tdTime(result.time)}</td>
						<td>{tdGap(result.gap)}</td>
						<td>{tdGap(result.gapPrev)}</td>
						<td>{valueMax(result.watt, 'w')}</td>
						<td>{valueMax(result.wattPerKg, 'w/kg')}</td>
						<td>{valueMax(result.avgHeartRate, 'bpm')}</td>
						<td>{valueMax(result.weightInGrams, 'kg')}</td>
						<td>{valueMax(result.heightInCentimeters, 'cm')}</td>
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
