import React from 'react';

import cls from '../Table.module.css';
import { tdStages, tdTime } from '../../../Utils/statistics';
import { tdRider } from '../../../Utils/table';

const TableBody = ({ results }) => {
	return (
		<tbody>
			{results.map((result, index) => {
				return (
					<tr key={result._id}>
						<td className={cls.tdPointsStage}>{index + 1}</td>
						<td>{tdRider(result.name, result.imageSrc)}</td>
						<td className={cls.tdPointsStage}>{tdStages(result)}</td>
						<td className={cls.tdPointsStage}>{tdTime(result.timeTotal)}</td>
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
