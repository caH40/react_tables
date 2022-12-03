import React, { useEffect, useState } from 'react';
import { getFeedback, postFeedback } from '../api/feedback';
import Form from '../Components/UI/Form/Form';
import Spinner from '../Components/UI/Spinner/Spinner';
import { useTelegram } from '../hooks/useTelegram';

const Feedback = () => {
	const [feedbacks, setFeedbacks] = useState([]);
	const [query, setQuery] = useState('');
	const [post, setPost] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const { userId } = useTelegram();

	useEffect(() => {
		getFeedback(setIsLoading).then(data => setFeedbacks(data));
	}, []);

	useEffect(() => {
		postFeedback(post).then(data => {
			if (!data) return;
			setFeedbacks(prev => [...prev, data]);
		});
	}, [userId, post]);

	return (
		<div className="form">
			<div>
				<h2>Обратная связь</h2>
				<Spinner isLoading={isLoading} />
				{feedbacks.map((feedback, index) => {
					return (
						<div className="feedback" key={feedback._id}>
							<div className="feedback__text">
								{index + 1}
								{'. '}
								{feedback.text}
							</div>
							<div className="feedback__date">{new Date(feedback.date).toLocaleString()}</div>
						</div>
					);
				})}
			</div>
			<Form
				telegramId={userId}
				setFeedbacks={setFeedbacks}
				query={query}
				setQuery={setQuery}
				setPost={setPost}
			/>
		</div>
	);
};

export default Feedback;
