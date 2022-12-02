import axios from 'axios';
import { serverExpress } from '../config';

export async function getGeneral(seriesId, setIsLoading) {
	setIsLoading(true);
	const result = await axios.post(`${serverExpress}/api/results/general?seriesId=${seriesId}`);
	setIsLoading(false);
	return result.data.generalPoints;
}
