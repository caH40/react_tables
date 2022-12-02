import axios from 'axios';
import { serverExpress } from '../config';

export async function getStatisticsStages(setIsLoading) {
	setIsLoading(true);
	const result = await axios.post(`${serverExpress}/api/statistics/stages`);
	setIsLoading(false);
	return result.data.statisticsStages;
}
