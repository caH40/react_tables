import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import TableBody from './TableBody';
import classes from '../Table.module.css';
import { titlesGeneral } from '../titles';
import { getGeneral } from '../../../api/general-series';

const TableGeneral = () => {
	const [general, setGeneral] = useState([]);

	let { series } = useParams();

	const category = series.slice(0, 1);

	useEffect(() => {
		getGeneral(series).then(data => setGeneral(data));
	}, []);
	// console.log(general);
	return (
		<div>
			<table className={classes.myTable}>
				{/* <caption>{general[0]?.title}</caption> */}
				<thead>
					<tr>
						{titlesGeneral.map(thTitle => {
							return <th key={thTitle}>{thTitle}</th>;
						})}
					</tr>
				</thead>
				<TableBody category={category} general={general} />
			</table>
			{general.length === 0 ? <div style={{ textAlign: 'center' }}>Loading...</div> : ''}
		</div>
	);
};

export default TableGeneral;