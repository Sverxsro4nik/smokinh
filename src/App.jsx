import React, { useLayoutEffect } from 'react';
import Header from './features/layouts/Header';
import Footer from './features/layouts/Footer';
import { Pagination, Container } from 'react-bootstrap';
import Carousel from './UIComponents/Carousel';
import FirstMerch from './assets/img/merg-1.png';
import SecondMerch from './assets/img/merg-2.png';
import HeaderSocial from './features/layouts/HeaderSocial';
import CarouselItem from './features/CarouselItem';
import Aside from './features/layouts/Aside';
import TabaksList from './features/TabaksList';
import ProductsHeader from './features/layouts/ProductsHeader';
import MerchItem from './features/MerchItem';
import BlogList from './features/blog/BlogList';
import NotFoundContainer from './features/notFound/NotFoundContainer/NotFoundContainer';
import ShowCityWindow from './features/ShowCityWindow';
import CityModal from './features/CityModal';

const merchList = [
	{
		img: FirstMerch,
		title: 'Наш мерч',
		description:
			'We are an online plant shop offering a wide range of cheap and trendy plants',
	},
	{
		img: SecondMerch,
		title: 'Кальянные смеси &Кальяны',
		description:
			'We are an online plant shop offering a wide range of cheap and trendy plants',
		isSecond: true,
	},
];

const App = () => {
	const [city, setCity] = React.useState('Москва');
	const [showCity, setShowCity] = React.useState(true);
	const [modalShow, setModalShow] = React.useState(false);
	useLayoutEffect(() => {
		setShowCity(true);
	}, []);

	return (
		<div>
			<HeaderSocial city={city} setModalShow={setModalShow} />
			<Container className='main'>
				<Header />
				<Carousel showThumbs={false}>
					<CarouselItem />
					<CarouselItem />
					<CarouselItem />
				</Carousel>
				<section
					className='d-flex justify-content-between w-100'
					style={{ gap: '50px' }}
				>
					<Aside />
					<div>
						<ProductsHeader />
						<TabaksList />
						<Pagination>
							<Pagination.Item active>1</Pagination.Item>
							<Pagination.Item active>2</Pagination.Item>
							<Pagination.Item active>3</Pagination.Item>
							<Pagination.Item active>4</Pagination.Item>
							<Pagination.Next />
						</Pagination>
					</div>
				</section>
				{/* Мерч */}
				<section
					className='d-flex justify-content-between w-100'
					style={{ marginTop: '261px', gap: '28px' }}
				>
					{merchList.map(merch => (
						<MerchItem key={merch.title} {...merch} />
					))}
				</section>
				<section
					className='d-flex flex-column gap-3 align-items-center'
					style={{ marginTop: '128px' }}
				>
					<h3>Наш блог</h3>
					<p>
						Мы являемся интернет-магазином кальянов, предлагающим широкий
						ассортимент современных и по доступной цене кальянов и их
						комплектующих.
					</p>
					<BlogList />
				</section>
				{/* Не найден товар */}
				<NotFoundContainer />
			</Container>
			<Footer />
			{showCity && (
				<ShowCityWindow
					city={city}
					successHandler={() => setShowCity(false)}
					failHandler={() => setModalShow(true)}
				/>
			)}
			<CityModal
				show={modalShow}
				setCity={setCity}
				handleClose={() => setModalShow(false)}
			/>
		</div>
	);
};

export default App;
