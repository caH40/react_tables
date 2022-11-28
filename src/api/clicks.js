import axios from 'axios';
import { serverExpress } from '../config';

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
