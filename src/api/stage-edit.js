import axios from 'axios';
import { serverExpress } from '../config';

export async function postStageEdit(newCategory, zwiftId, stageId) {
	const response = await axios.post(
		`${serverExpress}/api/stage/post-edit`,
		{ newCategory, zwiftId, stageId },
		{
			'Content-type': 'application/json',
		}
	);
	return response.data.message;
}
