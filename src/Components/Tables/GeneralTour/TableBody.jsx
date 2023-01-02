import React from 'react';

import { tdRider, tdTime, tdTimeTour, tdGap } from '../../../Utils/table';
import Spinner from '../../UI/Spinner/Spinner';

const TableBody = ({ results, category, isLoading }) => {
	return (
		<tbody>
			<tr>
				<td colSpan={8}>
					<Spinner isLoading={isLoading} />
				</td>
			</tr>
			{results.map((result, index) => {
				return (
					<tr key={result.id}>
						<td>{index + 1}</td>
						<td>{tdRider(result.name, result.imageSrc)}</td>
						<td>{tdTime(result.timeTotal)}</td>
						<td>{tdGap(result.gap)}</td>
						<td>{tdGap(result.gapPrev)}</td>
						{tdTimeTour(result)}
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
