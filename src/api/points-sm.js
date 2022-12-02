import axios from 'axios';
import { serverExpress } from '../config';

export async function getPointsSM(seriesId, typePoints, setIsLoading) {
	if (typePoints === 'M') {
		setIsLoading(true);
		const result = await axios.post(`${serverExpress}/api/results/mountain?seriesId=${seriesId}`);
		setIsLoading(false);
		return result.data.pointsMountain;
	} else if (typePoints === 'S') {
		setIsLoading(true);
		const result = await axios.post(`${serverExpress}/api/results/sprint?seriesId=${seriesId}`);
		setIsLoading(false);
		return result.data.pointsSprint;
	}
}
