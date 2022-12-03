import axios from 'axios';
import { serverExpress } from '../config';

export async function getRiders(telegramId, setIsLoading) {
	setIsLoading(true);
	const result = await axios.post(
		`${serverExpress}/api/riders`,
		{ telegramId },
		{
			'Content-type': 'application/json',
		}
	);
	setIsLoading(false);
	return result.data.ridersDB;
}
