import axios from 'axios';
const serverExpress = process.env.REACT_APP_SERVER_EXPRESS;

export async function postClick(telegramId) {
	const response = await axios.post(
		`${serverExpress}/api/clicks`,
		{ telegramId },
		{
			'Content-type': 'application/json',
		}
	);
	return response.data.message;
}
