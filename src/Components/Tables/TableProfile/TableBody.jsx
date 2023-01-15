import React from 'react';

import {
	tdCategory,
	tdDate,
	tdDNF,
	tdPenalty,
	tdPlace,
	tdSeries,
	tdTime,
	valueMax,
} from '../../../Utils/table';
import Spinner from '../../UI/Spinner/Spinner';

const TableBody = ({ profile, category, isLoading }) => {
	return (
		<tbody>
			<tr>
				<td colSpan={12}>
					<Spinner isLoading={isLoading} />
				</td>
			</tr>
			{profile.map((result, index) => {
				return (
					<tr key={result._id}>
						<td>{index + 1}</td>
						<td>{tdCategory(result, category)}</td>
						<td>{tdPlace(result, category)}</td>
						<td>{tdDate(result.date)}</td>
						<td>{tdSeries(result.series)}</td>
						<td>{tdSeries(result.route)}</td>
						<td>{tdTime(result.time)}</td>
						<td>{valueMax(result.watt, 'w')}</td>
						<td>{valueMax(result.wattPerKg, 'w/kg')}</td>
						<td>{valueMax(result.avgHeartRate, 'bpm')}</td>
						<td>{valueMax(result.weightInGrams, 'kg')}</td>
						<td>{valueMax(result.heightInCentimeters, 'cm')}</td>
						<td>{tdPenalty(result.penalty, result._id)}</td>
						<td>{tdDNF(result.isDisqualification)}</td>
						<td>{tdDNF(result.isDidNotFinish)}</td>
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
