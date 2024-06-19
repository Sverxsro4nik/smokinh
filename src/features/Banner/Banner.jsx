import React from 'react';
import Img from '../../assets/img/FirstScreenImage.png';
import cls from './Banner.module.css';

const Banner = () => {
	return (
		<div className={cls.Container}>
			<h3 className={cls.Sale}>Sale</h3>
			<p className={cls.Heading}>Скидки на все табаки до конца мая</p>
			<img src={Img} alt='Изображение' />
			<p className={cls.Discount}>- 15%</p>
			<p className={cls.Promo}>“ВСЕ ЛЕТИМ НА ШАШЛЫНДОС”</p>
		</div>
	);
};

export default Banner;
