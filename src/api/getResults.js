import axios from 'axios';
import { serverExpress } from '../config';

export async function getResults(params) {
	const result = await axios(`${serverExpress}/results/stage?stageId=${params}`);
	return result.data.resultsDB;
}
