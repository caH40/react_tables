import axios from 'axios';
const serverExpress = process.env.REACT_APP_SERVER_EXPRESS;

export async function getStatisticsStages(setIsLoading) {
	setIsLoading(true);
	const result = await axios.post(`${serverExpress}/api/statistics/stages`);
	setIsLoading(false);
	return result.data.statisticsStages;
}
