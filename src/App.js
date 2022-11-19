import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Components/Home';
import SettingsNotice from './Pages/SettingsNotice';
import TableStage from './Components/Tables/Stage/TableStage';

import { useTelegram } from './hooks/useTelegram';
import Page404 from './Pages/Page404';
import EditStage from './Pages/StageEdit';
import TableGeneral from './Components/Tables/General/TableGeneral';
import TableSMPoints from './Components/Tables/TableSMPoints/TableSMPoints';

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
				<Route path="results/general/:series" element={<TableGeneral />} />
				<Route path="results/mountain/:series" element={<TableSMPoints />} />
				<Route path="results/sprint/:series" element={<TableSMPoints />} />
				<Route path="edit/stage/:params" element={<EditStage />} />
			</Routes>
		</div>
	);
}

export default App;
