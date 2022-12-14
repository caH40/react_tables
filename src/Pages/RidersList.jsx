import React, { useEffect, useState } from 'react';

import { getRiders } from '../api/riders';

import { useTelegram } from '../hooks/useTelegram';
import Page404 from './Page404';
import TableRiders from '../Components/Tables/Riders/TableRiders';

const RidersList = () => {
	const [riders, setRiders] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const { userId } = useTelegram();

	useEffect(() => {
		getRiders(userId, setIsLoading).then(data => setRiders(data));
	}, [userId]);

	if (userId !== +process.env.REACT_APP_ADMIN) return <Page404 />;

	return <TableRiders riders={riders} isLoading={isLoading} />;
};

export default RidersList;
