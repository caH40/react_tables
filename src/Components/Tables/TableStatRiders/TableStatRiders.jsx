import React, { useEffect, useState } from 'react';
import { postClick } from '../../../api/clicks';
import { getStatisticsRiders } from '../../../api/statistics-riders';
import { useTelegram } from '../../../hooks/useTelegram';
import Spinner from '../../UI/Spinner/Spinner';
import cls from '../Table.module.css';
import TableBody from './TableBody';

const TableStatRiders = () => {
	const [results, setResults] = useState([]);

	const { userId } = useTelegram();

	useEffect(() => {
		getStatisticsRiders().then(data => setResults(data));
		postClick(userId);
	}, [userId]);
	return (
		<div>
			<table className={cls.myTable}>
				<caption>{results[0]?.title}</caption>
				<thead>
					<tr>
						<th>#</th>
						<th>Rider</th>
						<th>Stages</th>
						<th>Total time</th>
					</tr>
				</thead>
				<TableBody results={results} />
			</table>
			{results.length === 0 ? (
				<div style={{ display: 'flex', justifyContent: 'center' }}>{<Spinner />}</div>
			) : (
				''
			)}
		</div>
	);
};

export default TableStatRiders;
