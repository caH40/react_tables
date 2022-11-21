import classes from '../Components/Tables/Table.module.css';

export function tdPointsTotal(rider) {
	return <span className={classes.totalCorrect}>{rider.pointsTotal}</span>;
}

export function tdPointsStage(rider, typePoints) {
	const tdFinal = [];
	const stringForType = {
		S: { quantity: 'quantitySprints', type: 'sprint', points: 'pointsSprint' },
		M: { quantity: 'quantityMountains', type: 'mountain', points: 'pointsMountain' },
	};

	for (let i = 0; i < rider.stages.length; i++) {
		for (let j = 0; j < rider.stages[i][stringForType[typePoints].quantity]; j++) {
			let oneResult = rider[stringForType[typePoints].points].find(
				discipline =>
					discipline.stageNumber === rider.stages[i].number &&
					discipline[stringForType[typePoints].type] === j + 1
			);

			const classGray = oneResult?.points === 0 ? classes.pointsWrong : '';
			let key = `i${i}j${j}`;
			let tdTemp = oneResult ? (
				<td className={classGray} key={key}>
					{oneResult.points}
				</td>
			) : (
				<td className={classes.pointsWrong} key={key}>
					{'-'}
				</td>
			);

			tdFinal.push(tdTemp);
		}
	}

	return tdFinal;
}
