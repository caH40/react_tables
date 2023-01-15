import avatar from '../Components/images/avatar.svg';
import cls from '../Components/Tables/Table.module.css';

export function valueMax(value, dimension) {
	const data = String(value).includes('max') ? (
		<span className="maxRed">
			{value.replace('max', '')}
			<small>{dimension}</small>
		</span>
	) : (
		<span>
			{value}
			<small>{dimension}</small>
		</span>
	);

	return value ? data : '';
}

export function tdRider(name, imageSrc, clsName = 'logo') {
	const riderLogo = imageSrc ? imageSrc : avatar;
	return (
		<div className={cls.rider}>
			<img className={cls[clsName]} src={riderLogo} alt="Ph" /> <span>{name}</span>
		</div>
	);
}
export function tdLinkZP(zwiftRiderId) {
	return (
		<a
			target="_blank"
			rel="noreferrer"
			href={`https://zwiftpower.com/profile.php?z=${zwiftRiderId}`}
		>
			ZwiftPower
		</a>
	);
}

export function tdTime(time) {
	if (time === 'DQ') return <div className={cls.dq}>DQ</div>;
	if (time === 'DNF') return <div className={cls.dq}>DNF</div>;
	return String(time).includes('.')
		? [
				time.split('.')[0],
				<span className={cls.thousandthsSecond} key={Date.now()}>
					.{time.split('.')[1]}
				</span>,
		  ]
		: time;
}

export function tdTimeTour(result) {
	return result.time.map((timeStage, timeStageIndex) => (
		<td key={timeStageIndex}>
			<span className={cls.thousandthsSecond}>{timeStage.timeStage}</span>
		</td>
	));
}

export function tdPlace(result, category = 'T') {
	return category === 'T' ? result.placeAbsolute : result.placeCategory;
}
export function tdCategory(result) {
	let newCategory = result.category;
	if (result.category.includes('WA') || result.category.includes('WB'))
		newCategory = result.category.slice(1);
	return (
		<div className={cls.categoryBox}>
			<div className={`${cls.category} ${cls[result.category]}`}>{newCategory}</div>
			{result.isUnderChecking ? <div className={cls.underChecking}>❗</div> : ''}
		</div>
	);
}

export function tdGap(gap) {
	return <div className={cls.gap}>{gap ? ['+', gap] : ''}</div>;
}

export function tdPenalty(penalty, key) {
	return (
		<div>
			{penalty.powerUp !== 0 ? (
				<span className={cls.penalty}>{[penalty.powerUp, 'PU']}</span>
			) : (
				<span></span>
			)}
		</div>
	);
}

export function tdDate(date) {
	if (!date) return <div></div>;
	let dateArr = date.split('.');
	dateArr[2] = dateArr[2]?.slice(2);
	date = dateArr.join('.');
	return (
		<div className={cls.tdNameStage}>
			<span>{date}</span>
		</div>
	);
}

export function tdSeries(name) {
	return (
		<div className={cls.tdNameStage}>
			<span>{name}</span>
		</div>
	);
}
export function tdDNF(isTrue) {
	return (
		<div>
			<span>{isTrue ? 'Yes' : ''}</span>
		</div>
	);
}
