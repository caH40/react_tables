import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import TableBody from './TableBody';
import cls from '../Table.module.css';
import { getPointsSM } from '../../../api/points-sm';
import TheadPointsSM from './TheadPointsSM';
import { postClick } from '../../../api/clicks';
import { useTelegram } from '../../../hooks/useTelegram';

const TableSMPoints = () => {
	const [points, setPoints] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const { userId } = useTelegram();
	let { series } = useParams();
	const typePoints = series.slice(0, 1);

	useEffect(() => {
		getPointsSM(series, typePoints, setIsLoading).then(data => setPoints(data));
		postClick(userId);
	}, [series, userId, typePoints]);

	return (
		<div>
			<table className={cls.myTable}>
				<caption>{typePoints === 'S' ? 'Спринтерский зачет' : 'Горный зачет'}</caption>
				<TheadPointsSM points={points} typePoints={typePoints} />
				<TableBody isLoading={isLoading} points={points} typePoints={typePoints} />
			</table>
		</div>
	);
};

export default TableSMPoints;
