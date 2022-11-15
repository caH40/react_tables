import axios from 'axios';
import { serverExpress } from '../config';

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
	// console.log(result);
	// console.log('result.data.settings', result.data.settings);
	// return result.data.settings;
}
