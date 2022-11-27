import React from 'react';
import cls from '../Table.module.css';

import { tdPointsTotal, tdPoints, tdTeam } from '../../../Utils/team';

const TableBody = ({ points }) => {
	return (
		<tbody>
			{points.map((pointTeam, indexTeam) => {
				return (
					<tr key={indexTeam}>
						<td>{indexTeam + 1}</td>
						<td>{tdTeam(pointTeam)}</td>
						<td className={cls.tdPointsTotalStage}>{tdPointsTotal(pointTeam)}</td>
						{tdPoints(pointTeam)}
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
