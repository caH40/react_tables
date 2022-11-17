import React, { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { getResults } from '../../../../api/getResults';
import TableStageEditBody from './TableStageEditBody';
import classes from '../Table.module.css';
import { titlesStageEdit } from '../titles';
import { useTelegram } from '../../../../hooks/useTelegram';

const TableStageEdit = () => {
	const [results, setResults] = useState([]);
	const [popup, setPopup] = useState('');

	const { params } = useParams();
	const { tg } = useTelegram();

	useEffect(() => {
		getResults(params).then(data => setResults(data));
	}, []);

	// useMemo(() => {
	// 	if (popup)
	// 		tg.showPopup(
	// 			{ title: 'Выполнена операция', message: popup, buttons: [{ type: 'close', id: 1 }] },
	// 			() => {
	// 				setPopup('');
	// 			}
	// 		);
	// }, [popup, tg]);

	return (
		<div>
			{popup ? <div>{popup}</div> : ''}
			<table className={classes.myTable}>
				<caption>{results[0]?.title}</caption>
				<thead>
					<tr>
						{titlesStageEdit.map(thTitle => {
							return <th key={thTitle}>{thTitle}</th>;
						})}
					</tr>
				</thead>
				<TableStageEditBody setPopup={setPopup} results={results} setResults={setResults} />
			</table>
			{results.length === 0 ? <div style={{ textAlign: 'center' }}>Loading...</div> : ''}
		</div>
	);
};

export default TableStageEdit;
