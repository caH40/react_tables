import React from 'react';

import { tdPointsTotal, tdPointsStage } from '../../../Utils/points-sm';
import { tdRider } from '../../../Utils/table';

const TableBody = ({ points }) => {
	return (
		<tbody>
			{points.map(rider => {
				return (
					<tr key={rider.name}>
						<td>{rider.sequence}</td>
						<td>{tdRider(rider.name, rider.imageSrc)}</td>
						<td>{tdPointsTotal(rider)}</td>
						{tdPointsStage(rider)}
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
