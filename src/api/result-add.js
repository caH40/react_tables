import axios from 'axios';
const serverExpress = process.env.REACT_APP_SERVER_EXPRESS;

export async function postNewResult(result) {
	try {
		const response = await axios.post(
			`${serverExpress}/api/stage/add-result`,
			{ ...result },
			{
				'Content-type': 'application/json',
			}
		);

		return response.data.message;
	} catch (error) {
		console.log(error.response.data.message);
		return error.response.data.message;
	}
}
