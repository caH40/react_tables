import axios from 'axios';
const serverExpress = process.env.REACT_APP_SERVER_EXPRESS;

export async function getResults(params, setIsLoading) {
	setIsLoading(true);
	const result = await axios.post(`${serverExpress}/api/results/stage?stageId=${params}`);
	setIsLoading(false);
	return result.data.resultsDB;
}
