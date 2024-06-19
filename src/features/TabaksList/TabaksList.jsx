import React from 'react';
import cls from './TabaksList.module.css';
import TabakItem from '../TabakItem';

const TabaksList = () => {
	return (
		<div className={cls.List}>
			<TabakItem />
			<TabakItem />
			<TabakItem />
			<TabakItem />
			<TabakItem />
			<TabakItem />
			<TabakItem />
			<TabakItem />
			<TabakItem />
		</div>
	);
};

export default TabaksList;
