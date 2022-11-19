import axios from 'axios';
import { serverExpress } from '../config';

export async function getPointsMountain(seriesId) {
	const result = await axios.post(`${serverExpress}/api/results/mountain?seriesId=${seriesId}`);
	return result.data.pointsMountain;
}
