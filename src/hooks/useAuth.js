import { useEffect, useState } from 'react';
import { authenticate } from '../api/auth';
import { useTelegram } from './useTelegram';

export function useAuth() {
	const [query, setQuery] = useState('');
	const [auth, setAuth] = useState('');
	const [password, setPassword] = useState('');

	const { userId } = useTelegram();

	useEffect(() => {
		if (auth === '') return;
		authenticate(userId, auth).then(data => {
			setPassword(data);
		});
	}, [auth, userId]);

	const getHashPassword = e => {
		e.preventDefault();
		setAuth(query);
	};
	//FIXME: for dev
	return {
		query,
		setQuery,
		userId: 412801722,
		getHashPassword,
		password: '$2b$10$XJmD7pf4lh7WLowTlJ92o.tiMB7.kWx0SItRWLe2X/MIvhY5qTQGm',
	};
	// return { query, setQuery, userId, getHashPassword, password };
}
