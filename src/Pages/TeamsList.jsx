import React, { useEffect, useState } from 'react';
import { getTeams } from '../api/teams-list';
import avatar from '../Components/images/avatar.svg';
import Spinner from '../Components/UI/Spinner/Spinner';

const TeamsList = () => {
	const [teams, setTeams] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		getTeams(setIsLoading).then(data => setTeams(data));
	}, []);

	return (
		<div>
			<Spinner isLoading={isLoading} />
			{teams.map(team => (
				<div key={team._id} className="team__inner">
					<h3>{team.name}</h3>
					<div className="team__description">{team.description}</div>

					<div className="blockLogo">
						<div className="blockLogo__img">
							<img
								className="logoTeamList"
								src={team.logoBase64 ? `data:image/jpeg;base64, ${team.logoBase64}` : avatar}
								alt="team_logo"
							/>
						</div>

						<ul>
							{team.riders.map((rider, index) => {
								const userName = rider.rider.telegramUsername;
								return (
									<li key={index}>
										{index + 1}
										{'. '}
										{userName ? (
											<a className="blockLogo__link" href={`https://t.me/${userName}`}>
												{rider.rider.firstName} {rider.rider.lastName} ({rider.rider.category})
											</a>
										) : (
											<span>
												{rider.rider.firstName} {rider.rider.lastName} ({rider.rider.category})
											</span>
										)}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			))}
		</div>
	);
};

export default TeamsList;
