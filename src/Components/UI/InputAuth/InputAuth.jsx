import React from 'react';

const InputAuth = ({ query, setQuery, getHashPassword, password }) => {
	return password ? (
		''
	) : (
		<form>
			<input
				value={query}
				onChange={e => setQuery(e.target.value)}
				type={'password'}
				autoComplete="current-password"
				id="current-password"
			/>
			<button onClick={getHashPassword}>Sing in</button>
		</form>
	);
};

export default InputAuth;
