import React from 'react';
import cls from '../Table.module.css';

import { tdPointsTotal, tdPoints, tdTeam, tdPointsRiders } from '../../../Utils/team';
import Spinner from '../../UI/Spinner/Spinner';
import { tdRider } from '../../../Utils/table';
import { useState } from 'react';

const TableBody = ({ points, isLoading }) => {
	const [team, setTeam] = useState('');

	const showRiders = teamName => {
		setTeam(prev => {
			if (prev === teamName) {
				return '';
			} else {
				return teamName;
			}
		});
	};

	return (
		<>
			<tbody>
				<tr>
					<td colSpan={8}>
						<Spinner isLoading={isLoading} />
					</td>
				</tr>
			</tbody>
			{points.map((pointTeam, indexTeam) => {
				return (
					<tbody key={indexTeam}>
						<tr className={cls.trLink} onClick={e => showRiders(pointTeam.teamName)}>
							<td>{indexTeam + 1}</td>
							<td>{tdTeam(pointTeam)}</td>
							<td className={cls.tdPointsTotalStage}>{tdPointsTotal(pointTeam)}</td>
							{tdPoints(pointTeam)}
						</tr>

						{pointTeam.riders.map((riders, indexRider) => {
							return team === pointTeam.teamName ? (
								<tr key={indexRider}>
									<td></td>
									<td>{tdRider(riders.riderName, riders.imageSrc)}</td>
									<td></td>
									{tdPointsRiders(riders)}
								</tr>
							) : (
								''
							);
						})}
					</tbody>
				);
			})}
		</>
	);
};

export default TableBody;
