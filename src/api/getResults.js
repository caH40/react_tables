import axios from 'axios';
import { serverExpress } from '../config';

export async function getResults(params) {
	const result = await axios.post(`${serverExpress}/api/results/stage?stageId=${params}`);
	console.log('result', result);
	return result.data.resultsDB;
}
