import React from 'react';
import cls from './MerchItem.module.css';
import { ReactComponent as ArrowRight } from '../../assets/icons/ArrowRight.svg';
import Button from '../../UIComponents/Button';

const MerchItem = props => {
	const { img, title, description, isSecond } = props;
	return (
		<div className={cls.Container}>
			<img
				src={img}
				className={isSecond ? `${cls.Img} ${cls.SecondImg}` : cls.Img}
				alt='Наш мерч'
			/>
			<div className={cls.About}>
				<div>
					<h4 className={cls.Title}>{title}</h4>
					<p className={cls.Description}>{description}</p>
					<Button>
						<span>Перейти</span> <ArrowRight />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default MerchItem;
