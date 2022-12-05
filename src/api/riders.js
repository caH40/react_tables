import axios from 'axios';
const serverExpress = process.env.REACT_APP_SERVER_EXPRESS;

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
