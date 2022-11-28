import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPointsTeams } from '../../../api/points-teams';
import TableBody from './TableBody';
import TableThead from './TableThead';
import cls from '../Table.module.css';
import Spinner from '../../UI/Spin/Spin';
import { postClick } from '../../../api/clicks';
import { useTelegram } from '../../../hooks/useTelegram';

const TableTeams = () => {
	const [points, setTeamPoints] = useState([]);

	const { userId } = useTelegram();
	const { series } = useParams();

	useEffect(() => {
		getPointsTeams(series).then(data => setTeamPoints(data));
		postClick(userId);
	}, [series, userId]);

	return (
		<div>
			<table className={cls.myTable}>
				<caption>{'Командный зачет'}</caption>
				<TableThead points={points} />
				<TableBody points={points} />
			</table>
			{points.length === 0 ? (
				<div style={{ display: 'flex', justifyContent: 'center' }}>{<Spinner />}</div>
			) : (
				''
			)}
		</div>
	);
};

export default TableTeams;
