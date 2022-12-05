import React from 'react';

import TableStageEdit from '../Components/Tables/StageEdit/TableStageEdit';
import InputAuth from '../Components/UI/InputAuth/InputAuth';
import { useAuth } from '../hooks/useAuth';

const EditStage = () => {
	const { query, setQuery, userId, getHashPassword, password } = useAuth();
	return (
		<div>
			<InputAuth
				password={password}
				query={query}
				setQuery={setQuery}
				getHashPassword={getHashPassword}
			/>
			{password ? <TableStageEdit password={password} telegramId={userId} /> : ''}
		</div>
	);
};
export default EditStage;
