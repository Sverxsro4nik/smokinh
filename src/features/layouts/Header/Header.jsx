import React from 'react';
import { Container } from 'react-bootstrap';
import cls from './Header.module.css';
import HeaderNav from '../HeaderNav';
import Logo from '../../../UIComponents/Logo';
import Cabinet from '../../user/Cabinet';

const Header = () => {
	return (
		<Container className={cls.Header}>
			<Logo />
			<HeaderNav />
			<Cabinet />
		</Container>
	);
};

export default Header;
