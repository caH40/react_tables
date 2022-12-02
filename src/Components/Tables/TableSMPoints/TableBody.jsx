import React from 'react';

import { tdPointsTotal, tdPointsStage } from '../../../Utils/points-sm';
import { tdRider } from '../../../Utils/table';
import Spinner from '../../UI/Spinner/Spinner';
import cls from '../Table.module.css';

const TableBody = ({ points, typePoints, isLoading }) => {
	return (
		<tbody>
			<tr>
				<td colSpan={5}>
					<Spinner isLoading={isLoading} />
				</td>
			</tr>
			{points.map(rider => {
				return (
					<tr key={rider.name}>
						<td className={cls.tdPointsStage}>{rider.sequence}</td>
						<td>{tdRider(rider.name, rider.imageSrc)}</td>
						<td className={cls.tdPointsStage}>{tdPointsTotal(rider, typePoints)}</td>
						{tdPointsStage(rider, typePoints)}
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
