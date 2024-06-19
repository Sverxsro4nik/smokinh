import React from 'react';
import { Modal } from 'react-bootstrap';
import cls from './CityModal.module.css';
const cityList = [
	'Москва',
	'Киров',
	'Пермь',
	'Казань',
	'Сыктывкар',
	'Нижний Новгород',
	'Кострома',
	'Москва',
	'Киров',
	'Пермь',
	'Казань',
	'Сыктывкар',
	'Нижний Новгород',
	'Кострома',
	'Москва',
	'Киров',
	'Пермь',
	'Казань',
	'Сыктывкар',
	'Нижний Новгород',
	'Кострома',
];

const CityModal = props => {
	const { show, handleClose, setCity } = props;
	const selectHandler = city => {
		setCity(city);
		handleClose();
	};
	return (
		<Modal show={show} onHide={handleClose} size='lg'>
			<div className={cls.Modal}>
				<h4 className={cls.Title}>Укажите ваш город</h4>
				<div className={cls.Cities}>
					{cityList.map(city => (
						<span
							key={city}
							className={cls.City}
							onClick={() => selectHandler(city)}
						>
							{city}
						</span>
					))}
				</div>
			</div>
		</Modal>
	);
};

export default CityModal;
