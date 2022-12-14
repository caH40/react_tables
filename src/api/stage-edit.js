import axios from 'axios';
const serverExpress = process.env.REACT_APP_SERVER_EXPRESS;

export async function postStageEdit(newCategory, zwiftId, stageId, telegramId, password) {
	const response = await axios.post(
		`${serverExpress}/api/stage/post-edit`,
		{ newCategory, zwiftId, stageId, telegramId, password },
		{
			'Content-type': 'application/json',
		}
	);
	return response.data.message;
}
