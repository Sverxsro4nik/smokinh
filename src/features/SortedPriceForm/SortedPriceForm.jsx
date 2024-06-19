import React from 'react';
import { Form } from 'react-bootstrap';
import Button from '../../UIComponents/Button';
import MultiRangeSlider from '../../UIComponents/MultiRangeSlider/MultiRangeSlider';
import cls from './SortedPriceForm.module.css';

const SortedPriceForm = () => {
	const [price, setPrice] = React.useState(0);
	return (
		<Form className={cls.Form}>
			<legend className={'form-label'}>Цена</legend>
			<div>
				<MultiRangeSlider
					min={100}
					max={100000}
					value={price}
					onChange={setPrice}
				/>
			</div>
			<div className={cls.Buttons}>
				<Button>Применить</Button>
				<Button className={cls.Reset}>Сброс</Button>
			</div>
		</Form>
	);
};

export default SortedPriceForm;
