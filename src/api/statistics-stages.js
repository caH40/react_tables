import axios from 'axios';
import { serverExpress } from '../config';

export async function getStatisticsStages() {
	const result = await axios.post(`${serverExpress}/api/statistics/stages`);
	return result.data.statisticsStages;
}
