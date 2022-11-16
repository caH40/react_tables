import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { getResults } from '../../../../api/getResults';
import TableStageEditBody from './TableStageEditBody';
import classes from '../Table.module.css';
import { titlesStageEdit } from '../titles';

const TableStageEdit = () => {
	const [results, setResults] = useState([]);

	let { params } = useParams();

	useEffect(() => {
		getResults(params).then(data => setResults(data));
	}, []);

	return (
		<div>
			<table className={classes.myTable}>
				<caption>{results[0]?.title}</caption>
				<thead>
					<tr>
						{titlesStageEdit.map(thTitle => {
							return <th key={thTitle}>{thTitle}</th>;
						})}
					</tr>
				</thead>
				<TableStageEditBody results={results} />
			</table>
			{results.length === 0 ? <div style={{ textAlign: 'center' }}>Loading...</div> : ''}
		</div>
	);
};

export default TableStageEdit;
