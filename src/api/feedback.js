import axios from 'axios';
const serverExpress = process.env.REACT_APP_SERVER_EXPRESS;

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
