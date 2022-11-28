export function tdTime(seconds) {
	seconds = seconds / 1000;

	const hour = Math.trunc(seconds / 3600);
	const minutes = Math.trunc((seconds - hour * 3600) / 60);
	const second = Math.trunc(seconds - hour * 3600 - minutes * 60);
	return (
		<span style={{ whiteSpace: 'nowrap' }}>
			{addNull(hour)}:{addNull(minutes)}:{addNull(second)}
		</span>
	);
}

function addNull(number) {
	number = String(number);
	if (number.length === 1) {
		return '0' + number;
	}
	if (number.length === 2) {
		return number;
	} else {
		return number;
	}
}

export function tdStages(result) {
	return (
		<span style={{ whiteSpace: 'nowrap' }}>
			{result.stages} ({result.percentCompleted}%)
		</span>
	);
}
