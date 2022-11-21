import axios from 'axios';
import { serverExpress } from '../config';

export async function getPointsSM(seriesId, typePoints) {
	if (typePoints === 'M') {
		const result = await axios.post(`${serverExpress}/api/results/mountain?seriesId=${seriesId}`);
		return result.data.pointsMountain;
	} else if (typePoints === 'S') {
		const result = await axios.post(`${serverExpress}/api/results/sprint?seriesId=${seriesId}`);
		return result.data.pointsSprint;
	}
}
