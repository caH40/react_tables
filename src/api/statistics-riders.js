import axios from 'axios';
import { serverExpress } from '../config';

export async function getStatisticsRiders() {
	const result = await axios.post(`${serverExpress}/api/statistics/riders`);
	return result.data.statisticsRiders;
}
