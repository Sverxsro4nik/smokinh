import React from 'react';
import ProductsNav from '../ProductsNav/ProductsNav';
import cls from './ProductsHeader.module.css';

const ProductsHeader = () => {
	return (
		<header className={cls.Container}>
			<ProductsNav />
			<div className={cls.ViewButtons}>
				<div className={cls.Tile}>
					<span className={`${cls.TileItem} ${cls.Active}`}></span>
					<span className={`${cls.TileItem} ${cls.Active}`}></span>
					<span className={`${cls.TileItem} ${cls.Active}`}></span>
					<span className={`${cls.TileItem} ${cls.Active}`}></span>
				</div>
				<div className={cls.Row}>
					<span className={cls.RowsItem}></span>
					<span className={cls.RowsItem}></span>
					<span className={cls.RowsItem}></span>
				</div>
			</div>
		</header>
	);
};

export default ProductsHeader;
