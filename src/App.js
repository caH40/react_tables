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
import TableTeams from './Components/Tables/TableTeams/TableTeams';
import TableStatStages from './Components/Tables/TableStatStages/TableStatStages';
import TableStatRiders from './Components/Tables/TableStatRiders/TableStatRiders';
import Feedback from './Pages/Feedback';

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
				<Route path="results/teams/:series" element={<TableTeams />} />
				<Route path="edit/stage/:params" element={<EditStage />} />
				<Route path="statistics/riders/" element={<TableStatRiders />} />
				<Route path="statistics/stages/" element={<TableStatStages />} />
				<Route path="feedback/" element={<Feedback />} />
			</Routes>
		</div>
	);
}

export default App;
