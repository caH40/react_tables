import axios from 'axios';
import { serverExpress } from '../config';

export async function postDisqualification(isDisqualification, resultId, setIsLoading) {
	console.log(isDisqualification, resultId);
	// setIsLoading(true);
	const result = await axios.post(
		`${serverExpress}/api/disqualification`,
		{
			isDisqualification,
			resultId,
		},
		{
			'Content-type': 'application/json',
		}
	);
	// setIsLoading(false);
	return result.data.pointsMountain;
}
