import axios from 'axios';
const serverExpress = process.env.REACT_APP_SERVER_EXPRESS;

export async function postDisqualification(isDisqualification, resultId, setIsLoading) {
	console.log(isDisqualification, resultId);
	// setIsLoading(true);
	const result = await axios.post(
		`${serverExpress}/api/disqualification`,
		{
			isDisqualification,
			resultId,
		},
		{
			'Content-type': 'application/json',
		}
	);
	// setIsLoading(false);
	return result.data.message;
}
