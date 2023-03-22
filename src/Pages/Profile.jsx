import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TableProfile from '../Components/Tables/TableProfile/TableProfile';
import Button from '../Components/UI/Button/Button';
import { useTelegram } from '../hooks/useTelegram';

const Profile = () => {
	const { zwiftId, button } = useParams();
	console.log({ zwiftId, button });
	const { onClose } = useTelegram();

	const navigate = useNavigate();
	const goBack = () => navigate(-1);
	return (
		<>
			<TableProfile zwiftId={zwiftId} />
			{button === 'back' ? (
				<Button sendForm={goBack}>НАЗАД</Button>
			) : (
				<Button sendForm={onClose}>ЗАКРЫТЬ</Button>
			)}
		</>
	);
};

export default Profile;
