import React from 'react';
import cls from '../Table.module.css';

import { tdPointsStage, tdPointsTotal } from '../../../Utils/general';
import { tdRider } from '../../../Utils/table';
import Spinner from '../../UI/Spinner/Spinner';
import { useNavigate } from 'react-router-dom';

const TableBody = ({ general, isLoading }) => {
	const navigate = useNavigate();
	const toProfile = zwiftId => {
		navigate(`/profile/${zwiftId}/back`);
	};
	return (
		<tbody>
			<tr>
				<td colSpan={10}>
					<Spinner isLoading={isLoading} />
				</td>
			</tr>
			{general.map(rider => {
				return (
					<tr key={rider.name} onClick={() => toProfile(rider.zwiftRiderId)} className={cls.trLink}>
						<td className={cls.tdPointsStage}>{rider.sequence}</td>
						<td className={cls.tdRiderStage}>{tdRider(rider.name, rider.imageSrc)}</td>
						<td className={cls.tdPointsTotalStage}>{tdPointsTotal(rider)}</td>
						<td className={cls.tdPointsStage}>{tdPointsStage(rider, 1)}</td>
						<td className={cls.tdPointsStage}>{tdPointsStage(rider, 2)}</td>
						<td className={cls.tdPointsStage}>{tdPointsStage(rider, 3)}</td>
						<td className={cls.tdPointsStageSecond}>{tdPointsStage(rider, 4)}</td>
						<td className={cls.tdPointsStageSecond}>{tdPointsStage(rider, 5)}</td>
						<td className={cls.tdPointsStageSecond}>{tdPointsStage(rider, 6)}</td>
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
