import React from 'react';
import Img from '../../assets/img/FirstScreenImage.png';
import cls from './CarouselItem.module.css';
import Button from '../../UIComponents/Button';

const CarouselItem = () => {
	return (
		<div className={cls.Item}>
			<div className={cls.About}>
				<div>
					<p className={cls.Heading}>Интернет-магазин кальянов и аксессуаров</p>
					<h2 className={cls.Title}>Smoking shop</h2>
					<p className={cls.Description}>
						We are an online plant shop offering a wide range of cheap and
						trendy plants. Use our plants to create an unique Urban Jungle.
						Order your favorite plants!
					</p>
				</div>
				<div className={cls.Buttons}>
					<Button>Начать покупки</Button>
				</div>
			</div>
			<div className={cls.ImgWrapper}>
				<img src={Img} alt='Изображение' className={cls.Img} />
			</div>
		</div>
	);
};

export default CarouselItem;
