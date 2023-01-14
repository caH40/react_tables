import React, { useEffect, useState } from 'react';

import { postClick } from '../../../api/clicks';
import { getRiderStages } from '../../../api/getRiderStages';
import { useTelegram } from '../../../hooks/useTelegram';
import { tdRider } from '../../../Utils/table';
import cls from '../Table.module.css';
import { titlesProfile } from '../titles';
import TableBody from './TableBody';

const TableProfile = ({ zwiftId }) => {
	const [profile, setProfile] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const { userId } = useTelegram();

	useEffect(() => {
		getRiderStages(zwiftId, setIsLoading).then(data => setProfile(data));
		postClick(userId);
	}, [userId, zwiftId]);

	const photo = profile => {
		if (!profile) return;
		for (let i = 0; i < profile.length; i++) {
			if (profile[i].imageSrc) {
				return profile[i].imageSrc;
			}
		}
	};

	return (
		<div>
			<table className={cls.myTable}>
				<caption>{tdRider(profile[0]?.name, photo(profile))}</caption>
				<thead>
					<tr>
						{titlesProfile.map(thTitle => {
							return <th key={thTitle}>{thTitle}</th>;
						})}
					</tr>
				</thead>
				<TableBody isLoading={isLoading} profile={profile} />
			</table>
		</div>
	);
};

export default TableProfile;
