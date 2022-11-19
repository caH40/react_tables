import React from 'react';

import { tdPointsStage, tdPointsTotal } from '../../../Utils/general';
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
						<td>{tdPointsStage(rider, 1)}</td>
						<td>{tdPointsStage(rider, 2)}</td>
						<td>{tdPointsStage(rider, 3)}</td>
						<td>{tdPointsStage(rider, 4)}</td>
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
