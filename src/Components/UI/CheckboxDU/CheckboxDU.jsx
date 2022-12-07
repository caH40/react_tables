import React from 'react';
import { postDisqualification } from '../../../api/disqualification';
import { postUnderChecking } from '../../../api/underchecking';

const CheckboxDU = ({ type, result, results, setResults, setPopup, telegramId, password }) => {
	let element = '';
	if (type === 'disqualification') element = 'isDisqualification';
	if (type === 'underChecking') element = 'isUnderChecking';

	const changedBox = e => {
		const tempResults = [...results];
		tempResults.forEach(elm => {
			if (elm._id === result._id) {
				elm[element] = !result[element];
			}
		});
		setResults(tempResults);

		if (type === 'disqualification')
			postDisqualification(result[element], result._id, telegramId, password).then(data =>
				setPopup(data)
			);
		if (type === 'underChecking')
			postUnderChecking(result[element], result._id, telegramId, password).then(data =>
				setPopup(data)
			);
	};
	return (
		<div>
			<input id={result._id} checked={result[element]} onChange={changedBox} type={'checkbox'} />
		</div>
	);
};

export default CheckboxDU;
