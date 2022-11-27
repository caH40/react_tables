import axios from 'axios';
import { serverExpress } from '../config';

export async function getPointsTeams(seriesId) {
	const result = await axios.post(`${serverExpress}/api/results/teams?seriesId=${seriesId}`);
	return result.data.pointsTeams;
}
