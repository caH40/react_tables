import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TableStage from '../Components/Tables/Stage/TableStage';

import Button from '../Components/UI/Button/Button';
import { useTelegram } from '../hooks/useTelegram';

const ResultStage = () => {
	const { stageId, button } = useParams();

	const { onClose } = useTelegram();

	const navigate = useNavigate();
	const goBack = () => navigate(-1);
	return (
		<>
			<TableStage stageId={stageId} />
			{button === 'back' ? (
				<Button sendForm={goBack}>НАЗАД</Button>
			) : (
				<Button sendForm={onClose}>ЗАКРЫТЬ</Button>
			)}
		</>
	);
};

export default ResultStage;
