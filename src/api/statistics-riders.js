import axios from 'axios';
const serverExpress = process.env.REACT_APP_SERVER_EXPRESS;

export async function getStatisticsRiders(setIsLoading) {
	setIsLoading(true);
	const result = await axios.post(`${serverExpress}/api/statistics/riders`);
	setIsLoading(false);
	return result.data.statisticsRiders;
}
