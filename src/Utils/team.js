import cls from '../Components/Tables/Table.module.css';
import avatar from '../Components/images/avatar.svg';

export function tdTeam(pointTeam) {
	const teamLogo = pointTeam.logoBase64
		? `data:image/jpeg;base64, ${pointTeam.logoBase64}`
		: avatar;
	return (
		<div className={cls.rider}>
			<img className={cls.logoTeam} src={teamLogo} alt="Ph" /> <span>{pointTeam.teamName}</span>
		</div>
	);
}
export function tdPointsTotal(pointTeam) {
	return <span className={cls.totalCorrect}>{pointTeam.pointsTotal}</span>;
}
export function tdPoints(pointTeam) {
	return pointTeam.team.map((point, index) => (
		<td className={cls.tdPointsStage} key={index}>
			<span>{point.points}</span>
		</td>
	));
}
