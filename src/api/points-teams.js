import axios from 'axios';
import { serverExpress } from '../config';

export async function getPointsTeams(seriesId, setIsLoading) {
	setIsLoading(true);
	const result = await axios.post(`${serverExpress}/api/results/teams?seriesId=${seriesId}`);
	setIsLoading(false);
	return result.data.pointsTeams;
}
