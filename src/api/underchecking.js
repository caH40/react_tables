import axios from 'axios';
const serverExpress = process.env.REACT_APP_SERVER_EXPRESS;

export async function postUnderChecking(isUnderChecking, resultId, telegramId, password) {
	const result = await axios.post(
		`${serverExpress}/api/underchecking`,
		{
			isUnderChecking,
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
