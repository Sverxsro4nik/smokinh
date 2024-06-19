import React from 'react';
import { ReactComponent as SearchIcon } from '../../../assets/icons/SearchIcon.svg';
import { ReactComponent as BasketIcon } from '../../../assets/icons/BasketIcon.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/icons/LogoutIcon.svg';
import Button from '../../../UIComponents/Button';
import cls from './Cabinet.module.css';

const Cabinet = () => {
	return (
		<div className={cls.Cabinet}>
			<Button className={cls.SearchButton}>
				<SearchIcon />
			</Button>
			<Button className={cls.Basket}>
				<BasketIcon />
			</Button>
			<Button>
				<LogoutIcon />
				<span>Войти</span>
			</Button>
		</div>
	);
};

export default Cabinet;
