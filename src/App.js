import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Components/Home';
import SettingsNotice from './Pages/SettingsNotice';
import TableStage from './Components/UI/Tables/Stage/TableStage';

import { useTelegram } from './hooks/useTelegram';
import Page404 from './Pages/Page404';

function App() {
	const { tg } = useTelegram();

	useEffect(() => {
		tg.ready();
	}, [tg]);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Page404 />} />
				<Route path="settings/notice/:telegramId" element={<SettingsNotice />} />
				<Route path="results/stage/:params" element={<TableStage />} />
			</Routes>
		</div>
	);
}

export default App;
