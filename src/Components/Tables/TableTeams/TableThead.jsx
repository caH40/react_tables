import React from 'react';

const TableThead = ({ points }) => {
	return (
		<thead>
			<tr>
				<th>#</th>
				<th>Team</th>
				<th>Total</th>
				{points[0]?.team.map((stage, index) => (
					<th key={index}>St.{stage.stageNumber}</th>
				))}
			</tr>
		</thead>
	);
};

export default TableThead;
