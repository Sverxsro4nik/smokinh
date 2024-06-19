import React from 'react';
import cls from './NotFoundContainer.module.css';
import { Container } from 'react-bootstrap';
import AnswerForm from '../AnswerForm';
import Img from '../../../assets/bg/notFoundBg.png';

const NotFoundContainer = () => {
	return (
		<Container className={cls.Container}>
			<div className={cls.About}>
				<h4 className={cls.Title}>Не нашли нужный товар?</h4>
				<AnswerForm />
				<p className={cls.Description}>
					Мы сможем подобрать нужный вам товар, а так же помочь со всеми
					вопросами, просто заполните ваш емейл и мы вам ответим
				</p>
			</div>
			<img src={Img} className={cls.Img} alt='Изображение' />
		</Container>
	);
};

export default NotFoundContainer;
