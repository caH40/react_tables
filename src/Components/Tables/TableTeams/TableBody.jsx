import React from 'react';
import cls from '../Table.module.css';

import { tdPointsTotal, tdPoints, tdTeam } from '../../../Utils/team';
import Spinner from '../../UI/Spinner/Spinner';

const TableBody = ({ points, isLoading }) => {
	return (
		<tbody>
			<tr>
				<td colSpan={8}>
					<Spinner isLoading={isLoading} />
				</td>
			</tr>
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
