import axios from 'axios';
import { serverExpress } from '../config';

export async function getResults(params, setIsLoading) {
	setIsLoading(true);
	const result = await axios.post(`${serverExpress}/api/results/stage?stageId=${params}`);
	setIsLoading(false);
	return result.data.resultsDB;
}
