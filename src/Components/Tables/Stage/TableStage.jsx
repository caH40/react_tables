import React from 'react';

import TableBody from './TableBody';
import cls from '../Table.module.css';
import { titlesStage } from '../titles';

const TableStage = ({ results, category }) => {
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
				<TableBody category={category} results={results} />
			</table>
		</div>
	);
};

export default TableStage;
