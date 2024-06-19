import React from 'react';
import cls from './ShowCityWindow.module.css';

const ShowCityWindow = props => {
	const { city, successHandler, failHandler } = props;
	const redirectHandler = () => {
		failHandler();
		successHandler();
	};
	return (
		<div className={cls.ShowCityWindow}>
			<p>
				Ваш город <span className={cls.City}>{city}</span> верно?
			</p>
			<div>
				<button
					className={`${cls.Button} ${cls.SuccessButton}`}
					type='button'
					onClick={successHandler}
				>
					Да
				</button>
				<button
					className={`${cls.Button} ${cls.FailButton}`}
					type='button'
					onClick={redirectHandler}
				>
					Нет
				</button>
			</div>
		</div>
	);
};

export default ShowCityWindow;
