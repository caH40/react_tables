import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { getResults } from '../../../api/getResults';
import TableBody from './TableBody';
import classes from '../Table.module.css';
import { titlesStage } from '../titles';
import Spinner from '../../UI/Spin/Spin';
import { useTelegram } from '../../../hooks/useTelegram';
import { postClick } from '../../../api/clicks';

const TableStage = () => {
	const [results, setResults] = useState([]);

	const { userId } = useTelegram();
	let { params } = useParams();
	const category = params.slice(0, 1);

	useEffect(() => {
		getResults(params).then(data => setResults(data));
		postClick(userId);
	}, [params, userId]);

	return (
		<div>
			<table className={classes.myTable}>
				<caption>{results[0]?.title}</caption>
				<thead>
					<tr>
						{titlesStage.map(thTitle => {
							return <th key={thTitle}>{thTitle}</th>;
						})}
					</tr>
				</thead>
				<TableBody category={category} results={results} />
			</table>
			{results.length === 0 ? (
				<div style={{ display: 'flex', justifyContent: 'center' }}>{<Spinner />}</div>
			) : (
				''
			)}
		</div>
	);
};

export default TableStage;
