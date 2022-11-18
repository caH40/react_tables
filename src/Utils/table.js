import avatar from '../Components/images/avatar.svg';
import classes from '../Components/Tables/Table.module.css';

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
		<div className={classes.rider}>
			<img className={classes.logo} src={riderLogo} alt="Ph" /> <span>{name}</span>
		</div>
	);
}

export function tdTime(time) {
	return String(time).includes('.')
		? [
				time.split('.')[0],
				<span className={classes.thousandthsSecond} key={Date.now()}>
					.{time.split('.')[1]}
				</span>,
		  ]
		: time;
}

export function tdCategory(result, category) {
	return category === 'T' ? result.placeAbsolute : result.placeCategory;
}
export function tdGap(gap) {
	return <span className={classes.gap}>{gap ? ['+', gap] : ''}</span>;
}
