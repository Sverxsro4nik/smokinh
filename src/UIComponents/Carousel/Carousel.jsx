import React from 'react';
import cls from './Carousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';

const Carousel = props => {
	return (
		<ResponsiveCarousel
			showThumbs={false}
			dynamicHeight
			className={cls.Carousel}
			showStatus={false}
		>
			{props.children}
		</ResponsiveCarousel>
	);
};

export default Carousel;
