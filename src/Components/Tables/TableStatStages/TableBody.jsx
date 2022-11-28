import React from 'react';

import cls from '../Table.module.css';
import { tdTime } from '../../../Utils/statistics';

const TableBody = ({ results }) => {
	return (
		<tbody>
			{results.map((result, index) => {
				return (
					<tr key={result._id}>
						<td className={cls.tdPointsStage}>{index + 1}</td>
						<td>{result.series}</td>
						<td>
							{result.number}, {result.type}
						</td>
						<td>{result.route}</td>
						<td className={cls.tdPointsStage}>{result.quantity}</td>
						<td className={cls.tdPointsStage}>{tdTime(result.timeBest)}</td>
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
