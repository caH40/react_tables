import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import TableBody from './TableBody';
import classes from '../Table.module.css';
import { getPointsMountain } from '../../../api/points-mountain';
import TheadMountain from './TheadMountain';

const TableSMPoints = () => {
	const [points, setPoints] = useState([]);

	let { series } = useParams();
	const typePoints = series.slice(0, 1);

	useEffect(() => {
		getPointsMountain(series).then(data => setPoints(data));
	}, []);

	return (
		<div>
			<table className={classes.myTable}>
				<caption>{typePoints === 'S' ? 'Спринтерский зачет' : 'Горный зачет'}</caption>
				<TheadMountain points={points} />
				<TableBody points={points} />
			</table>
			{points.length === 0 ? <div style={{ textAlign: 'center' }}>Loading...</div> : ''}
		</div>
	);
};

export default TableSMPoints;
