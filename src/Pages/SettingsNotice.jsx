import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSettings, postSettings } from '../api/settings';
import Checkbox from '../Components/UI/Checkbox/Checkbox';
import { useTelegram } from '../hooks/useTelegram';

const messages = {
	true: 'Включено!',
	false: 'Выключено!',
	news: 'Оповещение о новостях:',
	newRace: 'Оповещение об анонсах заездов:',
	botInfo: 'Оповещение об изменениях данных в боте:',
	training: 'Оповещение о новых статьях про велотренировки:',
};

const SettingsNotice = () => {
	const [box, setBox] = useState({ news: true, newRace: true, botInfo: true, training: true });
	const [popup, setPopup] = useState(false);
	const [response, setResponse] = useState({});
	const { telegramId } = useParams();
	const { showPopup } = useTelegram();

	useEffect(() => {
		getSettings(telegramId).then(data => {
			setBox(data);
		});
	}, []);

	useEffect(() => {
		if (popup)
			showPopup(
				{ title: 'Выполнена операция', message: response, buttons: [{ type: 'close', id: 1 }] },
				() => setPopup(false)
			);
	}, [popup, response, showPopup]);

	// стоит логическое "НЕ"-! для более понятной записи в БД,  true - включено
	const updateSettings = e => {
		const freshBox = { ...box, [e.target.id]: !e.target.checked };
		setResponse(`${messages[e.target.id]} ${messages[!e.target.checked]}`);
		setPopup(true);
		setBox(freshBox);
		postSettings({ notice: freshBox, telegramId });
	};

	return (
		<div className="webApp">
			{/* <h2>{popup ? 'Включено' : 'Выключено'}</h2> */}
			<h2>Параметры оповещения</h2>
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
				label="Статьи о тренировках"
				id="training"
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
