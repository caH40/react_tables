import axios from 'axios';
const serverExpress = process.env.REACT_APP_SERVER_EXPRESS;

export async function getSettings(telegramId) {
	const result = await axios.post(
		`${serverExpress}/api/user/get-settings?telegramId=${telegramId}`
	);
	return result.data.settings;
}

export async function postSettings(settings) {
	const result = await axios.post(`${serverExpress}/api/user/post-settings`, settings, {
		'Content-type': 'application/json',
	});

	return result.data.response;
}
