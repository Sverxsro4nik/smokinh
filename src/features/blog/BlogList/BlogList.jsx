import React from 'react';
import cls from './BlogList.module.css';

import BlogItem from '../BlogItem';

const blogsArticles = [
	{
		id: 1,
		title: 'Кальянные комплектующие',
		date: '12 марта',
		description: 'Cacti are succulents are easy care plants for any home',
	},
	{
		id: 2,
		title: 'Кальянные комплектующие',
		date: '12 марта',
		description: 'Cacti are succulents are easy care plants for any home',
	},
	{
		id: 3,
		title: 'Кальянные комплектующие',
		date: '12 марта',
		description: 'Cacti are succulents are easy care plants for any home',
	},
	{
		id: 4,
		title: 'Кальянные комплектующие',
		date: '12 марта',
		description: 'Cacti are succulents are easy care plants for any home',
	},
];

const BlogList = () => {
	return (
		<div className={cls.List}>
			{blogsArticles.map(item => (
				<BlogItem
					key={item.id}
					title={item.title}
					date={item.date}
					description={item.description}
				/>
			))}
		</div>
	);
};

export default BlogList;
