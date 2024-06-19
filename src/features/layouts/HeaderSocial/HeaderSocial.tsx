import React from 'react';
import cls from './HeaderSocial.module.css';
import { ReactComponent as VKIcon } from '../../../assets/icons/VkIcon.svg';
import { ReactComponent as YoutubeIcon } from '../../../assets/icons/YoutubeIcon.svg';
import { ReactComponent as TelegramIcon } from '../../../assets/icons/TelegramIcon.svg';
import { ReactComponent as ArrowDownIcon } from '../../../assets/icons/ArrowWhiteIcon.svg';
import { Container } from 'react-bootstrap';

const HeaderSocial = props => {
	const { city, setModalShow } = props;
	return (
		<div className={cls.SocialWrapper}>
			<Container className='d-flex justify-content-between'>
				<div className='d-flex align-items-center gap-3'>
					<span className={cls.City}>г.{city}</span>
					<button className={cls.Button} onClick={() => setModalShow(true)}>
						<ArrowDownIcon fillStroke='currentColor' />
					</button>
				</div>
				<div className={cls.Social}>
					<a href='#' className={cls.SocialIcon}>
						<VKIcon fill='currentColor' />
					</a>
					<a href='#' className={cls.SocialIcon}>
						<YoutubeIcon fill='currentColor' />
					</a>
					<a href='#' className={cls.SocialIcon}>
						<TelegramIcon fill='currentColor' />
					</a>
				</div>
			</Container>
		</div>
	);
};

export default HeaderSocial;
