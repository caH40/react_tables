import axios from 'axios';
import { serverExpress } from '../config';

export async function getTeams(setIsLoading) {
	setIsLoading(true);
	const result = await axios.post(`${serverExpress}/api/teams`);
	setIsLoading(false);
	return result.data.teamsDB;
}
