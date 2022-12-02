import React, { useEffect, useState } from 'react';
import { postClick } from '../../../api/clicks';
import { getStatisticsStages } from '../../../api/statistics-stages';
import { useTelegram } from '../../../hooks/useTelegram';
import cls from '../Table.module.css';
import TableBody from './TableBody';

const TableStatStages = () => {
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const { userId } = useTelegram();

	useEffect(() => {
		getStatisticsStages(setIsLoading).then(data => setResults(data));
		postClick(userId);
	}, [userId]);
	return (
		<div>
			<table className={cls.myTable}>
				<caption>{results[0]?.title}</caption>
				<thead>
					<tr>
						<th>#</th>
						<th>Series</th>
						<th>Stages</th>
						<th>Route</th>
						<th>Riders</th>
						<th>Best</th>
					</tr>
				</thead>
				<TableBody isLoading={isLoading} results={results} />
			</table>
		</div>
	);
};

export default TableStatStages;
