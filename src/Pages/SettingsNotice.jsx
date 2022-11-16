import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSettings, postSettings } from '../api/settings';
import Checkbox from '../Components/UI/Checkbox/Checkbox';

const SettingsNotice = () => {
	const [box, setBox] = useState({ news: true, newRace: true, botInfo: true });
	const { telegramId } = useParams();

	useEffect(() => {
		getSettings(telegramId).then(data => {
			setBox(data);
		});
	}, []);
	// стоит логическое "НЕ"-! для более понятной записи в БД,  true - включено
	const updateSettings = e => {
		const freshBox = { ...box, [e.target.id]: !e.target.checked };
		setBox(freshBox);
		postSettings({ notice: freshBox, telegramId });
	};

	return (
		<div className="webApp">
			<h2>Параметры оповещения</h2>
			{/* <div>{JSON.stringify(box)}</div> */}
			<Checkbox updateSettings={updateSettings} settings={box} label="Новости" id="news" />
			<Checkbox
				updateSettings={updateSettings}
				settings={box}
				label="Анонсы заездов"
				id="newRace"
			/>
			<Checkbox
				updateSettings={updateSettings}
				settings={box}
				label="Информация от бота"
				id="botInfo"
			/>
		</div>
	);
};

export default SettingsNotice;
