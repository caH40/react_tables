import axios from 'axios';
import { serverExpress } from '../config';

export async function getTeams() {
	const result = await axios.post(`${serverExpress}/api/teams`);
	return result.data.teamsDB;
}
