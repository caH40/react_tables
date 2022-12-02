import React, { useEffect, useState } from 'react';
import { postClick } from '../../../api/clicks';
import { getStatisticsRiders } from '../../../api/statistics-riders';
import { useTelegram } from '../../../hooks/useTelegram';
import cls from '../Table.module.css';
import TableBody from './TableBody';

const TableStatRiders = () => {
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const { userId } = useTelegram();

	useEffect(() => {
		getStatisticsRiders(setIsLoading).then(data => setResults(data));
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
				<TableBody isLoading={isLoading} results={results} />
			</table>
		</div>
	);
};

export default TableStatRiders;
