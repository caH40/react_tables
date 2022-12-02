import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { getResults } from '../../../api/getResults';
import TableBody from './TableBody';
import cls from '../Table.module.css';
import { titlesStage } from '../titles';
import { useTelegram } from '../../../hooks/useTelegram';
import { postClick } from '../../../api/clicks';

const TableStage = () => {
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const { userId } = useTelegram();
	let { params } = useParams();
	const category = params.slice(0, 1);

	useEffect(() => {
		getResults(params, setIsLoading).then(data => setResults(data));
		postClick(userId);
	}, [params, userId]);

	return (
		<div>
			<table className={cls.myTable}>
				<caption>{results[0]?.title}</caption>
				<thead>
					<tr>
						{titlesStage.map(thTitle => {
							return <th key={thTitle}>{thTitle}</th>;
						})}
					</tr>
				</thead>
				<TableBody isLoading={isLoading} category={category} results={results} />
			</table>
		</div>
	);
};

export default TableStage;
