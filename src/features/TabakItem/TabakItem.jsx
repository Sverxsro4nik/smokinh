import React from 'react';
import ListImg from '../../assets/img/listImage.png';
import cls from './TabakItem.module.css';

const TabakItem = () => {
	return (
		<div className={cls.Item}>
			<img
				src={ListImg}
				className={cls.Img}
				alt='Alpha Hookah Beat Splash Doc (Колба Clear)'
			/>
			<div>
				<h3>Alpha Hookah Beat Splash Doc (Колба Clear)</h3>
				<p>1 190.00₽</p>
			</div>
		</div>
	);
};

export default TabakItem;
