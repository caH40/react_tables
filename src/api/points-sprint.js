import axios from 'axios';
import { serverExpress } from '../config';

export async function getPointsSprint(seriesId) {
	const result = await axios.post(`${serverExpress}/api/results/sprint?seriesId=${seriesId}`);
	return result.data.pointsSprint;
}
