import React from 'react';
import Button from '../Button/Button';
import cls from './InputAuth.module.css';

const InputAuth = ({ query, setQuery, getHashPassword, password }) => {
	return password ? (
		''
	) : (
		<form style={{ display: 'flex', justifyContent: 'left' }}>
			<input
				className={cls.MyInput}
				type="text"
				autoComplete="username"
				name="username"
				id="username"
				style={{ display: 'none' }}
			/>
			<input
				className={cls.MyInput}
				value={query}
				onChange={e => setQuery(e.target.value)}
				type={'password'}
				autoComplete="current-password"
				id="current-password"
				name="password"
			/>

			<Button sendForm={getHashPassword}>Sing in</Button>
		</form>
	);
};

export default InputAuth;
