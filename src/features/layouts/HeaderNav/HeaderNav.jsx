import React, { memo } from 'react';
import cls from './HeaderNav.module.css';

const HeaderNav = memo(() => {
	return (
		<nav className={cls.Nav}>
			<a href='#' className={cls.Item}>
				Главная
			</a>
			<a href='#' className={cls.Item}>
				Каталог
			</a>
			<a href='#' className={cls.Item}>
				Блог
			</a>
			<a href='#' className={cls.Item}>
				О нас
			</a>
		</nav>
	);
});

export default HeaderNav;
