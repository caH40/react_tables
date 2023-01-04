import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { postClick } from '../../../api/clicks';

import { useTelegram } from '../../../hooks/useTelegram';
import { titlesGeneralTour } from '../titles';
import TableBody from './TableBody';

import cls from '../Table.module.css';
import { getResults } from '../../../api/getResultsTour';

const TableGeneralTour = () => {
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const { userId } = useTelegram();
	let { series } = useParams();

	let category = '';
	if (series.includes('WA') || series.includes('WB')) {
		category = series.slice(0, 2);
	} else {
		category = series.slice(0, 1);
	}

	useEffect(() => {
		getResults(series, setIsLoading).then(data => setResults(data));
		postClick(userId);
	}, [series, userId]);

	return (
		<div>
			<table className={cls.myTable}>
				<caption>
					{results[0]?.seriesName}, Категория: "{category}"
				</caption>
				<thead>
					<tr>
						{titlesGeneralTour.map(thTitle => {
							return <th key={thTitle}>{thTitle}</th>;
						})}
					</tr>
				</thead>
				<TableBody isLoading={isLoading} category={category} results={results} />
			</table>
		</div>
	);
};

export default TableGeneralTour;
