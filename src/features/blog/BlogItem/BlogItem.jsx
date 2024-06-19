import React from 'react';
import { ReactComponent as ArrowRight } from '../../../assets/icons/ArrowRightBlack.svg';
import Button from '../../../UIComponents/Button';
import cls from './BlogItem.module.css';

const BlogItem = props => {
	const { date, title, description } = props;
	return (
		<div className={cls.BlogItem}>
			<div className={cls.Placeholder}></div>
			<div className={cls.Info}>
				<span className={cls.Date}>{date} </span>
				<h5 className={cls.Title}>{title}</h5>
				<p className={cls.Description}>{description}</p>
				<Button className={cls.ReadMore}>
					<span>Читать</span> <ArrowRight />
				</Button>
			</div>
		</div>
	);
};

export default BlogItem;
