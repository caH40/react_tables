import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTelegram } from '../../../hooks/useTelegram';

import {
	tdPlace,
	tdCategory,
	tdGap,
	tdRider,
	tdTime,
	valueMax,
	tdPenalty,
} from '../../../Utils/table';

import cls from '../Table.module.css';

const TableBody = ({ results, category, isLoading }) => {
	const { userId = 'none' } = useTelegram();

	const navigate = useNavigate();
	const toProfile = zwiftId => {
		navigate(`/profile/${zwiftId}/back`);
	};

	return (
		<tbody>
			{results.map(result => {
				const styleNameTr = userId === result.riderId?.telegramId ? 'rgba(255, 115, 0, 0.616)' : '';
				return (
					<tr
						key={result._id}
						onClick={() => toProfile(result.zwiftRiderId)}
						className={cls.trLink}
						style={{ background: styleNameTr }}
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
