import React from 'react';
import { useParams } from 'react-router-dom';

const SettingsNotice = () => {
	const { telegramId } = useParams();
	return (
		<div className="webApp">
			<h2>Параметры оповещения</h2>
			<div className="checkbox">
				<label className="checkbox__label">
					Новости
					<input className="checkbox__input" type={'checkbox'} />
					<span className="checkbox__switch-left" />
					<span className="checkbox__switch-right" />
				</label>
			</div>
			<div className="checkbox">
				<label className="checkbox__label">
					Анонсы заездов <input className="checkbox__input" type={'checkbox'} />
					<span className="checkbox__switch-left" />
					<span className="checkbox__switch-right" />
				</label>
			</div>
			<div className="checkbox">
				<label className="checkbox__label">
					Информация от бота
					<input className="checkbox__input" type={'checkbox'} />
					<span className="checkbox__switch-left" />
					<span className="checkbox__switch-right" />
				</label>
			</div>
		</div>
	);
};

export default SettingsNotice;
