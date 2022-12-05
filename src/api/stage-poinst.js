import axios from 'axios';
const serverExpress = process.env.REACT_APP_SERVER_EXPRESS;

export async function postSprintPoints(nameElement, name, place, resultId, telegramId, password) {
	const response = await axios.post(
		`${serverExpress}/api/stage/points`,
		{ nameElement, name, place, resultId, telegramId, password },
		{
			'Content-type': 'application/json',
		}
	);

	return response.data.message;
}
