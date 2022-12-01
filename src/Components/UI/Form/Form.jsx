import React from 'react';
import Button from '../Button/Button';
import Textarea from '../Input/Textarea';

import cls from './Form.module.css';

const Form = ({ query, setQuery, setPost, telegramId }) => {
	const sendForm = e => {
		e.preventDefault();
		if (query.length < 5) return;
		if (!query || /^\s*$/.test(query)) return setQuery('');
		setPost({ telegramId, query, date: Date.now() });
		setQuery('');
	};

	return (
		<form method="post" className={cls.myForm}>
			<div>
				<Textarea query={query} setPost={setPost} setQuery={setQuery} />
				<Button sendForm={sendForm}>Отправить</Button>
			</div>
		</form>
	);
};

export default Form;
