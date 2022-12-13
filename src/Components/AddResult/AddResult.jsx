import React, { useState } from 'react';
import { postNewResult } from '../../api/result-add';
import Button from '../UI/Button/Button';

import MyLi from '../UI/UL/MyLi';
import cls from './AddResult.module.css';

const AddResult = ({ riders, stageId, setModal, setPopup }) => {
	const [filteredRiders, setFilteredRiders] = useState([]);
	const [queryRider, setQueryRider] = useState('');
	const [selectedRider, setSelectedRider] = useState({});
	const [content, setContent] = useState(true);
	const [newResult, setNewResult] = useState({
		stageId,
		name: '',
		zwiftId: 0,
		time: 0,
		weightInGrams: 0,
		watt: 0,
		wattPerKg: 0,
		heightInCentimeters: 0,
		avgHeartRate: 0,
		category: 'C',
		categoryCurrent: 'C',
		imageSrc: '',
		gender: 'мужской',
		DNF: 'нет',
	});

	const searchRider = e => {
		const value = e.target.value;
		setQueryRider(value);

		setFilteredRiders(
			[...riders]
				.filter(
					rider =>
						rider.lastName.toLowerCase().includes(value ? value.toLowerCase() : undefined) ||
						rider.firstName.toLowerCase().includes(value ? value.toLowerCase() : undefined)
				)
				.sort((a, b) => a.lastName.localeCompare(b.lastName))
		);
	};

	const chooseRider = id => {
		setContent(false);
		const rider = riders.find(rider => rider._id === id);
		setSelectedRider(rider);
		setNewResult(prev => ({
			...prev,
			name: `${rider.firstNameZwift} ${rider.lastNameZwift}`,
			zwiftId: rider.zwiftId,
			riderId: rider._id,
			teamCurrent: rider.teamId,
		}));
	};

	const sendForm = () => {
		setModal(false);
		postNewResult({
			...newResult,
			wattPerKg:
				Math.round(
					newResult.watt / ((newResult.weightInGrams !== 0 ? newResult.weightInGrams : 1) / 100000)
				) / 100,
			category: newResult.category.toUpperCase(),
			categoryCurrent: newResult.categoryCurrent.toUpperCase(),
		}).then(data => setPopup(data));
	};

	return (
		<div className={cls.modal}>
			<div className={cls.container}>
				<div className={cls.block}>
					{content ? (
						<div className={cls.box__findRider}>
							<label htmlFor="searchRider">Введите фамилию или имя райдера</label>
							<input onChange={searchRider} value={queryRider} type="text" id="searchRider" />
							{filteredRiders.map(rider => (
								<div onClick={() => chooseRider(rider._id)} className={cls.rider} key={rider._id}>
									{`${rider.lastName} ${rider.firstName}`}
								</div>
							))}
						</div>
					) : (
						<form className={cls.box__formRider}>
							<ul>
								<MyLi
									newResult={{ fio: `${selectedRider.firstName} ${selectedRider.lastName}` }}
									label="ФИ"
									variable="fio"
									disabled={true}
								/>
								<MyLi
									newResult={{ ZwiftId: selectedRider.zwiftId }}
									label="ZwiftId"
									variable="ZwiftId"
									disabled={true}
								/>
								<MyLi
									newResult={{
										ZwiftFio: `${selectedRider.firstNameZwift} ${selectedRider.lastNameZwift}`,
									}}
									setNewResult={setNewResult}
									label="ZwiftFio"
									variable="ZwiftFio"
									disabled={true}
								/>
								<MyLi
									newResult={newResult}
									setNewResult={setNewResult}
									label="Время (мс)"
									variable="time"
									type="number"
								/>
								<MyLi
									newResult={newResult}
									setNewResult={setNewResult}
									label="Ватты"
									variable="watt"
									type="number"
								/>
								<MyLi
									newResult={newResult}
									setNewResult={setNewResult}
									label="Вес (грамм)"
									variable="weightInGrams"
									type="number"
								/>
								<MyLi
									newResult={{
										wattPerKg:
											Math.round(
												newResult.watt /
													((newResult.weightInGrams !== 0 ? newResult.weightInGrams : 1) / 100000)
											) / 100,
									}}
									label="wattPerKg"
									variable="wattPerKg"
									type="number"
									disabled={true}
								/>
								<MyLi
									newResult={newResult}
									setNewResult={setNewResult}
									label="Рост (см)"
									variable="heightInCentimeters"
									type="number"
								/>
								<MyLi
									newResult={newResult}
									setNewResult={setNewResult}
									label="Пульс"
									variable="avgHeartRate"
									type="number"
								/>
								<MyLi
									newResult={newResult}
									setNewResult={setNewResult}
									label="Категория"
									variable="category"
									type="text"
								/>
								<MyLi
									newResult={newResult}
									setNewResult={setNewResult}
									label="Кат. (заезд)"
									variable="categoryCurrent"
									type="text"
								/>
								<MyLi
									newResult={newResult}
									setNewResult={setNewResult}
									label="imageSrc"
									variable="imageSrc"
									type="text"
								/>
								<MyLi
									newResult={newResult}
									setNewResult={setNewResult}
									label="Пол (женский)"
									variable="gender"
									type="text"
								/>
								<MyLi
									newResult={newResult}
									setNewResult={setNewResult}
									label="Сход (да/нет)"
									variable="DNF"
									type="text"
								/>
							</ul>
							<Button sendForm={sendForm}>Сохранить результат</Button>
						</form>
					)}
				</div>
			</div>
		</div>
	);
};

export default AddResult;
