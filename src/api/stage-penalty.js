import axios from 'axios';
import { serverExpress } from '../config';

export async function postStagePenalty(newPenalty, resultId) {
	const response = await axios.post(
		`${serverExpress}/api/stage/penalty`,
		{ newPenalty, resultId },
		{
			'Content-type': 'application/json',
		}
	);
	return response.data.message;
}
