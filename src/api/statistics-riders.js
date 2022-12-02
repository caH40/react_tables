import axios from 'axios';
import { serverExpress } from '../config';

export async function getStatisticsRiders(setIsLoading) {
	setIsLoading(true);
	const result = await axios.post(`${serverExpress}/api/statistics/riders`);
	setIsLoading(false);
	return result.data.statisticsRiders;
}
