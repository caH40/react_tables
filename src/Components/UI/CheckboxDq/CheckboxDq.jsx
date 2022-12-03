import React from 'react';
import { postDisqualification } from '../../../api/disqualification';

const CheckboxDq = ({ result, results, setResults, setPopup }) => {
	const changedBox = e => {
		const tempResults = [...results];
		tempResults.forEach(elm => {
			if (elm._id === result._id) {
				elm.isDisqualification = !result.isDisqualification;
			}
		});
		setResults(tempResults);
		postDisqualification(result.isDisqualification, result._id).then(data => setPopup(data));
	};
	return (
		<div>
			<input
				id={result._id}
				checked={result.isDisqualification}
				onChange={changedBox}
				type={'checkbox'}
			/>
		</div>
	);
};

export default CheckboxDq;
