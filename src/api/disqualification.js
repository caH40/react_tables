import axios from 'axios';
const serverExpress = process.env.REACT_APP_SERVER_EXPRESS;

export async function postDisqualification(isDisqualification, resultId, telegramId, password) {
	const result = await axios.post(
		`${serverExpress}/api/disqualification`,
		{
			isDisqualification,
			resultId,
			telegramId,
			password,
		},
		{
			'Content-type': 'application/json',
		}
	);

	return result.data.message;
}
