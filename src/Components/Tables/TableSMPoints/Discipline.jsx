import React from 'react';

const stringForType = {
	S: { quantity: 'quantitySprints' },
	M: { quantity: 'quantityMountains' },
};

const Discipline = ({ points, typePoints }) => {
	const mountainsInStage = [];
	points[0]?.stages?.forEach((stage, index) => {
		for (let i = 0; i < stage[stringForType[typePoints].quantity]; i++) {
			mountainsInStage.push(
				<th key={String(index) + String(i)}>
					<div>{i + 1}</div>
				</th>
			);
		}
	});
	return <tr>{mountainsInStage}</tr>;
};

export default Discipline;
