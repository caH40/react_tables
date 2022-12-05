import axios from 'axios';
const serverExpress = process.env.REACT_APP_SERVER_EXPRESS;

export async function authenticate(telegramId, password) {
	const response = await axios.post(
		`${serverExpress}/api/authenticate`,
		{ telegramId, password },
		{
			'Content-type': 'application/json',
		}
	);
	return response.data.password;
}
