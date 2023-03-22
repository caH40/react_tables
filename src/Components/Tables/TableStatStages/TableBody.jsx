import React from 'react';

import cls from '../Table.module.css';
import { tdTime } from '../../../Utils/statistics';
import Spinner from '../../UI/Spinner/Spinner';
import { useNavigate } from 'react-router-dom';

const TableBody = ({ results, isLoading }) => {
	const navigate = useNavigate();
	const toResultStage = stageId => {
		navigate(`/results/stage/T${stageId}/back`);
	};

	return (
		<tbody>
			<tr>
				<td colSpan={6}>
					<Spinner isLoading={isLoading} />
				</td>
			</tr>
			{results.map((result, index) => {
				return (
					<tr key={result._id} onClick={() => toResultStage(result.stageId)} className={cls.trLink}>
						<td className={cls.tdPointsStage}>{index + 1}</td>
						<td>{result.series}</td>
						<td>
							{result.number}, {result.type}
						</td>
						<td>{result.route}</td>
						<td className={cls.tdPointsStage}>{result.quantity}</td>
						<td className={cls.tdPointsStage}>{tdTime(result.timeBest)}</td>
						<td className={cls.tdPointsStage}>{result.leader}</td>
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
