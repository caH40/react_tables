import React from 'react';
import MountainsInStage from './MountainsInStage';

const TheadMountain = ({ points }) => {
	return (
		<thead>
			<tr>
				<th rowSpan={2}>{'#'}</th>
				<th rowSpan={2}>{'Rider'}</th>
				<th rowSpan={2}>{'Total'}</th>

				{points[0]?.stages.map((stage, index) => {
					return (
						<th colSpan={points[0]?.stages.length} key={index}>
							<span>Stage{stage.number}</span>
						</th>
					);
				})}
			</tr>
			<MountainsInStage points={points} />
		</thead>
	);
};

export default TheadMountain;
