import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import TableBody from './TableBody';
import cls from '../Table.module.css';
import { titlesGeneral } from '../titles';
import { getGeneral } from '../../../api/general-series';
import { postClick } from '../../../api/clicks';
import { useTelegram } from '../../../hooks/useTelegram';

const TableGeneral = () => {
	const [general, setGeneral] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const { userId } = useTelegram();
	let { series } = useParams();

	const category = series.slice(0, 1);

	useEffect(() => {
		getGeneral(series, setIsLoading).then(data => setGeneral(data));
		postClick(userId);
	}, [series, userId]);

	return (
		<div>
			<table className={cls.myTable}>
				<caption>Генеральный зачёт! Группа "{general[0]?.category}"</caption>
				<thead>
					<tr>
						{titlesGeneral.map(thTitle => {
							return <th key={thTitle}>{thTitle}</th>;
						})}
					</tr>
				</thead>
				<TableBody isLoading={isLoading} category={category} general={general} />
			</table>
		</div>
	);
};

export default TableGeneral;
