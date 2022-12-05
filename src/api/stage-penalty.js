import axios from 'axios';
const serverExpress = process.env.REACT_APP_SERVER_EXPRESS;

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
