import cls from '../Components/Tables/Table.module.css';

export function tdPointsStage(rider, numberStage) {
	const type = {
		1: { f: 1, s: 4 },
		2: { f: 2, s: 5 },
		3: { f: 3, s: 6 },
		4: { f: 4, s: 1 },
		5: { f: 5, s: 2 },
		6: { f: 6, s: 3 },
	};

	const resultFirst = rider.pointsStage.find(stage => stage.number === type[numberStage].f)
		? rider.pointsStage.find(stage => stage.number === type[numberStage].f).points
		: -1;
	const resultSecond = rider.pointsStage.find(stage => stage.number === type[numberStage].s)
		? rider.pointsStage.find(stage => stage.number === type[numberStage].s).points
		: -1;

	if (resultFirst > resultSecond) return <span className={cls.totalCorrect}>{resultFirst}</span>;

	if (resultFirst === resultSecond) {
		if (numberStage === 1 || numberStage === 2 || numberStage === 3) {
			return <span className={cls.totalCorrect}>{resultFirst !== -1 ? resultFirst : '-'}</span>;
		} else {
			return <span className={cls.pointsWrong}>{resultFirst !== -1 ? resultFirst : '-'}</span>;
		}
	}

	if (resultFirst < resultSecond)
		return <span className={cls.pointsWrong}>{resultFirst !== -1 ? resultFirst : '-'}</span>;
}

export function tdPointsTotal(rider) {
	if (rider.resultStatus) {
		return <span className={cls.totalCorrect}>{rider.pointsTotal}</span>;
	} else {
		return <span className={cls.totalWrong}>{rider.pointsTotal}</span>;
	}
}
