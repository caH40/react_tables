import React from 'react';

import { tdPointsTotal, tdPointsStage } from '../../../Utils/points-sm';
import { tdRider } from '../../../Utils/table';

const TableBody = ({ points, typePoints }) => {
	return (
		<tbody>
			{points.map(rider => {
				return (
					<tr key={rider.name}>
						<td>{rider.sequence}</td>
						<td>{tdRider(rider.name, rider.imageSrc)}</td>
						<td>{tdPointsTotal(rider, typePoints)}</td>
						{tdPointsStage(rider, typePoints)}
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
