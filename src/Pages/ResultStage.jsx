import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { postClick } from '../api/clicks';
import { getResults } from '../api/getResults';

import TableStage from '../Components/Tables/Stage/TableStage';

import Button from '../Components/UI/Button/Button';
import Spinner from '../Components/UI/Spinner/Spinner';
import { useTelegram } from '../hooks/useTelegram';

const ResultStage = () => {
	const { stageId, button } = useParams();

	const { onClose } = useTelegram();

	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const { userId } = useTelegram();

	const category = stageId.slice(0, 1);

	useEffect(() => {
		getResults(stageId, setIsLoading).then(data => setResults(data));
		postClick(userId);
	}, [stageId, userId]);

	const navigate = useNavigate();
	const goBack = () => navigate(-1);
	return (
		<>
			<Spinner isLoading={isLoading} />
			{results?.length ? (
				<>
					<TableStage results={results} category={category} />
					{button === 'back' ? (
						<Button sendForm={goBack}>НАЗАД</Button>
					) : (
						<Button sendForm={onClose}>ЗАКРЫТЬ</Button>
					)}
				</>
			) : (
				' '
			)}
		</>
	);
};

export default ResultStage;
