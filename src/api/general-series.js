import axios from 'axios';
import { serverExpress } from '../config';

export async function getGeneral(seriesId) {
	const result = await axios.post(`${serverExpress}/api/results/general?seriesId=${seriesId}`);
	return result.data.generalPoints;
}
