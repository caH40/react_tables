import React from 'react';

const MountainsInStage = ({ points }) => {
	const mountainsInStage = [];
	points[0]?.stages?.forEach((stage, index) => {
		for (let i = 0; i < stage.quantityMountains; i++) {
			mountainsInStage.push(
				<th key={String(index) + String(i)}>
					<div>{i + 1}</div>
				</th>
			);
		}
	});
	return <tr>{mountainsInStage}</tr>;
};

export default MountainsInStage;
