import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TableProfile from '../Components/Tables/TableProfile/TableProfile';
import Button from '../Components/UI/Button/Button';

const Profile = () => {
	const { zwiftId } = useParams();
	const navigate = useNavigate();
	const goBack = () => navigate(-1);
	return (
		<>
			<TableProfile zwiftId={zwiftId} />
			<Button sendForm={goBack}>НАЗАД</Button>
		</>
	);
};

export default Profile;
