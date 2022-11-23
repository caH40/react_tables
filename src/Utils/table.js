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

export function tdRider(name, imageSrc) {
	const riderLogo = imageSrc ? imageSrc : avatar;
	return (
		<div className={cls.rider}>
			<img className={cls.logo} src={riderLogo} alt="Ph" /> <span>{name}</span>
		</div>
	);
}

export function tdTime(time) {
	return String(time).includes('.')
		? [
				time.split('.')[0],
				<span className={cls.thousandthsSecond} key={Date.now()}>
					.{time.split('.')[1]}
				</span>,
		  ]
		: time;
}

export function tdPlace(result, category) {
	return category === 'T' ? result.placeAbsolute : result.placeCategory;
}
export function tdCategory(result) {
	return <div className={`${cls.category} ${cls[result.category]}`}>{result.category}</div>;
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
