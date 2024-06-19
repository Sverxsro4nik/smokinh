import React from 'react';
import cls from './ProductsNav.module.css';

const ProductsNav = () => {
	return (
		<nav className={cls.Nav}>
			<a href='#' className={`${cls.Item} ${cls.ItemActive}`}>
				Наши товары
			</a>
			<a href='#' className={cls.Item}>
				Все товары
			</a>
			<a href='#' className={cls.Item}>
				Новинки
			</a>
			<a href='#' className={cls.Item}>
				Скидки
			</a>
		</nav>
	);
};

export default ProductsNav;
