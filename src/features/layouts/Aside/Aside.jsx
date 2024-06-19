import React from 'react';
import CategoryList from '../../CategoryList';
import SortedPriceForm from '../../SortedPriceForm/SortedPriceForm';
import cls from './Aside.module.css';
import Banner from '../../Banner/Banner';

const Aside = () => {
	return (
		<aside className={cls.Aside}>
			<div className={cls.Filters}>
				<h3>Категории</h3>
				<CategoryList />
				<SortedPriceForm />
			</div>
			<Banner />
		</aside>
	);
};

export default Aside;
