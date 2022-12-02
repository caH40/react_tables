import React from 'react';
import Spinner from '../../UI/Spinner/Spinner';

import cls from '../Table.module.css';

const TableRiders = ({ riders, isLoading }) => {
	return (
		<table className={cls.myTable}>
			<thead>
				<tr>
					<th>#</th>
					<th>ZwiftId</th>
					<th>FIO</th>
					<th>Zwift</th>
					<th>Team</th>
					<th>Trainer</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td colSpan={10}>
						<Spinner isLoading={isLoading} />
					</td>
				</tr>
				{riders.map((rider, index) => {
					return (
						<tr key={rider._id}>
							<td>{index + 1}</td>
							<td>{rider.zwiftId}</td>
							<td>
								{rider.lastName} {rider.firstName}
							</td>
							<td>
								{rider.firstNameZwift} {rider.lastNameZwift}
							</td>
							<td>{rider.teamId?.name}</td>
							<td>{rider.cycleTrainer}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default TableRiders;
