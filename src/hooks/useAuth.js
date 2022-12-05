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
	return { query, setQuery, userId, getHashPassword, password };
}
