import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { getResults } from '../../../api/getResults';
import TableBody from './TableBody';
import classes from '../Table.module.css';
import { titlesStage } from '../titles';

const TableStage = () => {
	const [results, setResults] = useState([]);

	let { params } = useParams();
	const category = params.slice(0, 1);

	useEffect(() => {
		getResults(params).then(data => setResults(data));
	}, []);

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
			{results.length === 0 ? <div style={{ textAlign: 'center' }}>Loading...</div> : ''}
		</div>
	);
};

export default TableStage;
