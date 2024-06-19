import React from 'react';
import cls from './CategoryList.module.css';

const CategoryList = () => {
	const [categories, setCategories] = React.useState([
		{
			name: 'Любой магазин',
			count: 33,
			isOpened: false,
			children: [],
		},
		{
			name: 'IQOS',
			count: 12,
			isOpened: false,
			children: [],
		},
		{
			name: 'Кальяные смеси',
			count: 39,
			isOpened: false,
			children: [
				{
					name: 'Кальяны',
					count: 23,
				},
			],
		},
		{
			name: 'Комплектующие',
			count: 17,
			isOpened: false,
			children: [],
		},
		{
			name: 'Мерч',
			count: 19,
			isOpened: false,
			children: [
				{
					name: 'Уголь',
					count: 13,
				},
			],
		},
		{
			name: 'Аксессуары',
			count: 19,
			isOpened: false,
			children: [],
		},
	]);
	return (
		<ul className={cls.List}>
			{categories.map(category => (
				<li
					key={category.name}
					className={
						category.isOpened && category.children.length > 0
							? `${cls.Item} ${cls.ItemActive}`
							: cls.Item
					}
					onClick={() =>
						setCategories(prev => {
							return prev.map(c => {
								if (c.name === category.name) {
									return {
										...c,
										isOpened: !c.isOpened,
									};
								}
								return c;
							});
						})
					}
				>
					<div>
						<span>{category.name}</span>
						<span> ({category.count})</span>
					</div>
					{category.isOpened && category.children.length > 0 && (
						<ul className={cls.SubList}>
							{category.children.map(child => (
								<li key={child.name} className={cls.SubItem}>
									<span>{child.name}</span>
									<span> ({child.count})</span>
								</li>
							))}
						</ul>
					)}
				</li>
			))}
		</ul>
	);
};

export default CategoryList;
