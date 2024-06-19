import React from 'react';
import cls from './Footer.module.css';
import { Container } from 'react-bootstrap';
import Logo from '../../../assets/img/Logo.png';
import { ReactComponent as CallingIcon } from '../../../assets/icons/CallingIcon.svg';
import { ReactComponent as MessageIcon } from '../../../assets/icons/MessageIcon.svg';
import { ReactComponent as LocationIcon } from '../../../assets/icons/LocationIcon.svg';
import { ReactComponent as VKIcon } from '../../../assets/icons/VkIcon.svg';
import { ReactComponent as YoutubeIcon } from '../../../assets/icons/YoutubeIcon.svg';
import { ReactComponent as TelegramIcon } from '../../../assets/icons/TelegramIcon.svg';

const Footer = () => {
	return (
		<footer>
			<div className={cls.InfoWrapper}>
				<Container className={cls.Info}>
					<img src={Logo} alt='' />
					<div>
						<CallingIcon />
						<span>+7 900 000 99 99</span>
					</div>
					<div>
						<MessageIcon />
						<span>contact@greenshop.com</span>
					</div>
					<div>
						<LocationIcon />
						<span>
							610001, Кировская обл, г Киров, Комсомольская ул, д. 46/6, оф. 401
						</span>
					</div>
				</Container>
			</div>
			<Container className={cls.FooterNav}>
				<div>
					<h4>Мой аккаунт</h4>
					<ul className='list-unstyled'>
						<li>Мой аккаунт</li>
						<li>История заказов</li>
						<li>Наши контакты</li>
						<li>Политика</li>
						<li>Блог</li>
					</ul>
				</div>
				<div>
					<h4>Помощь</h4>
					<ul className='list-unstyled'>
						<li>Поддержка</li>
						<li>Как купить</li>
						<li>Оплата и доставка</li>
						<li>Как вернуть</li>
						<li>Контакты</li>
					</ul>
				</div>
				<div>
					<h4>Категории</h4>
					<ul className='list-unstyled'>
						<li>IQOS</li>
						<li>Аксессуары</li>
						<li>Кальяные смеси</li>
						<li>Комплектующие</li>
						<li>Мерч</li>
						<li>Уголь</li>
						<li>Электронные сигареты</li>
					</ul>
				</div>
				<div className={cls.SocialWrapper}>
					<div className={cls.Social}>
						<div>
							<h3>Соц сети</h3>
							<div className={cls.SocialIcons}>
								<a href='#' className={cls.SocialIcon} aria-label=''>
									<VKIcon fill='currentColor' />
								</a>
								<a href='#' className={cls.SocialIcon} aria-label=''>
									<YoutubeIcon fill='currentColor' />
								</a>
								<a href='#' className={cls.SocialIcon} aria-label=''>
									<TelegramIcon fill='currentColor' />
								</a>
							</div>
						</div>
						<p className={cls.AgeLimit}>18+</p>
					</div>
					<div>
						<p className={cls.Copyright}>
							© 2023 Smoking Shop.Все права защищены.
						</p>
						<p>ИНН 4345427922 КПП 434501001 ОГРН 1154350010473</p>
					</div>
				</div>
			</Container>
			<Container>
				<p className={cls.Warning}>
					МИНЗДРАВ ПРЕДУПРЕЖДАЕТ: КУРЕНИЕ ВРЕДИТ ВАШЕМУ ЗДОРОВЬЮ!
				</p>
			</Container>
			<Container>
				<p className={cls.Explainer}>
					Мы не рекламируем табак и курение. Вся информация на сайте
					носитинформационный характер. Дистанционная продажа табачных изделий
					не ведется.
				</p>
			</Container>
		</footer>
	);
};

export default Footer;
