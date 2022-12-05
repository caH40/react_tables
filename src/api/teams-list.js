import axios from 'axios';
const serverExpress = process.env.REACT_APP_SERVER_EXPRESS;

export async function getTeams(setIsLoading) {
	setIsLoading(true);
	const result = await axios.post(`${serverExpress}/api/teams`);
	setIsLoading(false);
	return result.data.teamsDB;
}
