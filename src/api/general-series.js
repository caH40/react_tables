import axios from 'axios';
const serverExpress = process.env.REACT_APP_SERVER_EXPRESS;

export async function getGeneral(seriesId, setIsLoading) {
	setIsLoading(true);
	const result = await axios.post(`${serverExpress}/api/results/general?seriesId=${seriesId}`);
	setIsLoading(false);
	return result.data.generalPoints;
}
