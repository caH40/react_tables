import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import TableBody from './TableBody';
import classes from '../Table.module.css';
import { getPointsSM } from '../../../api/points-sm';
import TheadPointsSM from './TheadPointsSM';

const TableSMPoints = () => {
	const [points, setPoints] = useState([]);

	let { series } = useParams();
	const typePoints = series.slice(0, 1);

	useEffect(() => {
		getPointsSM(series, typePoints).then(data => setPoints(data));
	}, []);

	return (
		<div>
			<table className={classes.myTable}>
				<caption>{typePoints === 'S' ? 'Спринтерский зачет' : 'Горный зачет'}</caption>
				<TheadPointsSM points={points} typePoints={typePoints} />
				<TableBody points={points} typePoints={typePoints} />
			</table>
			{points.length === 0 ? <div style={{ textAlign: 'center' }}>Loading...</div> : ''}
		</div>
	);
};

export default TableSMPoints;
