import axios from 'axios';
const serverExpress = process.env.REACT_APP_SERVER_EXPRESS;

export async function postNewResult(result) {
	const response = await axios.post(
		`${serverExpress}/api/stage/add-result`,
		{ result },
		{
			'Content-type': 'application/json',
		}
	);
	return response.data.message;
}
