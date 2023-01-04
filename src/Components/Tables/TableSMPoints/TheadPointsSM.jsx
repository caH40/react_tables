import React from 'react';
import Discipline from './Discipline';

const TheadPointsSM = ({ points, typePoints = 'S' }) => {
	return (
		<thead>
			<tr>
				<th rowSpan={2}>{'#'}</th>
				<th rowSpan={2}>{'Rider'}</th>
				<th rowSpan={2}>{'Total'}</th>

				{points[0]?.stages.map((stage, index) => {
					return (
						<th
							colSpan={typePoints === 'M' ? stage.quantityMountains : stage.quantitySprints}
							key={index}
						>
							<span>Stage{stage.number}</span>
						</th>
					);
				})}
			</tr>
			<Discipline points={points} typePoints={typePoints} />
		</thead>
	);
};

export default TheadPointsSM;
