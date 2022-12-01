import React from 'react';
import cls from './Textarea.module.css';

const Textarea = ({ query, setQuery, setPost }) => {
	return (
		<textarea
			value={query}
			rows="3"
			type="text"
			placeholder="Ваши предложения и пожелания для улучшения работы бота."
			className={cls.myTextarea}
			onChange={e => setQuery(e.target.value)}
		/>
	);
};

export default Textarea;
