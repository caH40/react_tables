import axios from 'axios';
import { serverExpress } from '../config';

export async function postSprintPoints(nameElement, name, place, resultId) {
	const response = await axios.post(
		`${serverExpress}/api/stage/points`,
		{ nameElement, name, place, resultId },
		{
			'Content-type': 'application/json',
		}
	);
	return response.data.message;
}
