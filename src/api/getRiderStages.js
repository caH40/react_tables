import axios from 'axios';
const serverExpress = process.env.REACT_APP_SERVER_EXPRESS;

export async function getRiderStages(zwiftId, setIsLoading) {
	setIsLoading(true);
	const result = await axios.post(`${serverExpress}/api/profile`, { zwiftId });
	setIsLoading(false);
	return result.data.profile;
}
