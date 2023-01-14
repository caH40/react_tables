import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
	tdPlace,
	tdCategory,
	tdGap,
	tdRider,
	tdTime,
	valueMax,
	tdPenalty,
} from '../../../Utils/table';
import Spinner from '../../UI/Spinner/Spinner';

const TableBody = ({ results, category, isLoading }) => {
	const navigate = useNavigate();
	const toProfile = zwiftId => {
		navigate(`/profile/${zwiftId}`);
	};

	return (
		<tbody>
			<tr>
				<td colSpan={12}>
					<Spinner isLoading={isLoading} />
				</td>
			</tr>
			{results.map(result => {
				return (
					<tr
						key={result._id}
						onClick={() => toProfile(result.zwiftRiderId)}
						style={{ cursor: 'pointer' }}
					>
						<td>{tdCategory(result, category)}</td>
						<td>{tdPlace(result, category)}</td>
						<td>{tdRider(result.name, result.imageSrc)}</td>
						<td>{tdTime(result.time)}</td>
						<td>{tdGap(result.gap)}</td>
						<td>{tdGap(result.gapPrev)}</td>
						<td>{valueMax(result.watt, 'w')}</td>
						<td>{valueMax(result.wattPerKg, 'w/kg')}</td>
						<td>{valueMax(result.avgHeartRate, 'bpm')}</td>
						<td>{valueMax(result.weightInGrams, 'kg')}</td>
						<td>{valueMax(result.heightInCentimeters, 'cm')}</td>
						<td>{tdPenalty(result.penalty, result._id)}</td>
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
