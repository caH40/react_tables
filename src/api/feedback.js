import axios from 'axios';
import { serverExpress } from '../config';

export async function getFeedback(setIsLoading) {
	setIsLoading(true);
	const result = await axios.post(`${serverExpress}/api/feedback`);
	setIsLoading(false);
	return result.data.feedbackDB;
}
export async function postFeedback(post) {
	if (!post.query) return;
	const result = await axios.post(`${serverExpress}/api/post-feedback`, post, {
		'Content-type': 'application/json',
	});

	return result.data.savedFeedBack;
}
