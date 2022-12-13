import React, { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { getResults } from '../../../api/getResults';
import TableStageEditBody from './TableStageEditBody';
import classes from '../Table.module.css';
import { titlesStageEdit } from '../titles';
import { useTelegram } from '../../../hooks/useTelegram';
import { getRiders } from '../../../api/riders';
import Button from '../../UI/Button/Button';
import AddResult from '../../AddResult/AddResult';

const TableStageEdit = ({ password, telegramId }) => {
	const [results, setResults] = useState([]);
	const [popup, setPopup] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [riders, setRiders] = useState([]);
	const [modal, setModal] = useState(false);

	const { params } = useParams();
	const { showPopup, userId } = useTelegram();

	useEffect(() => {
		getResults(params, setIsLoading).then(data => {
			const quantitySprints = data[0]?.pointsSprint.map(elm => 'sprint' + elm.sprint);
			const quantityMountains = data[0]?.pointsMountain.map(elm => 'mountain' + elm.mountain);
			titlesStageEdit.splice(5, 0, ...quantitySprints, ...quantityMountains);

			data.forEach(result => {
				result.quantitySprints = quantitySprints;
				result.quantityMountains = quantityMountains;
			});
			setResults(data);
		});
	}, []);

	useEffect(() => {
		getRiders('412801722', setIsLoading).then(data => setRiders(data));
	}, []);

	useMemo(() => {
		if (popup)
			showPopup(
				{ title: 'Выполнена операция', message: popup, buttons: [{ type: 'close', id: 1 }] },
				() => setPopup('')
			);
	}, [popup, showPopup]);

	return (
		<div>
			<h3>Добавить результат</h3>
			<Button sendForm={() => setModal(true)}>Добавить</Button>
			<table className={classes.myTable}>
				<caption>{results[0]?.title}</caption>
				<thead>
					<tr>
						{titlesStageEdit.map(thTitle => {
							return <th key={thTitle}>{thTitle}</th>;
						})}
					</tr>
				</thead>
				<TableStageEditBody
					isLoading={isLoading}
					setPopup={setPopup}
					results={results}
					setResults={setResults}
					telegramId={telegramId}
					password={password}
				/>
			</table>
			{modal ? (
				<AddResult
					riders={riders}
					stageId={params.slice(1)}
					setPopup={setPopup}
					setModal={setModal}
				/>
			) : (
				''
			)}
		</div>
	);
};

export default TableStageEdit;
