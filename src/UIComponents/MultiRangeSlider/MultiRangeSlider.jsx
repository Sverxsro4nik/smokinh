import React, { useCallback, useEffect } from 'react';
import { useRef, useState } from 'react';
import './multiRangeSlider.css';
import classNames from 'classnames';

const MultiRangeSlider = props => {
	const [minVal, setMinVal] = useState(props.min);
	const [maxVal, setMaxVal] = useState(props.max);
	const range = useRef(null);
	const minValRef = useRef(null);
	const maxValRef = useRef(null);
	const getPercent = useCallback(
		value => Math.round(((value - props.min) / (props.max - props.min)) * 100),
		[props.min, props.max]
	);
	const convertPrice = price => {
		return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	};
	useEffect(() => {
		if (maxValRef.current) {
			const minPercent = getPercent(minVal);
			const maxPercent = getPercent(+maxValRef.current.value);

			if (range.current) {
				range.current.style.left = `${minPercent}%`;
				range.current.style.width = `${maxPercent - minPercent}%`;
			}
		}
	}, [minVal, getPercent]);

	useEffect(() => {
		if (minValRef.current) {
			const minPercent = getPercent(+minValRef.current.value);
			const maxPercent = getPercent(maxVal);

			if (range.current) {
				range.current.style.width = `${maxPercent - minPercent}%`;
			}
		}
	}, [maxVal, getPercent]);

	useEffect(() => {
		props.onChange({ min: minVal, max: maxVal });
	}, [minVal, maxVal]);
	return (
		<div className='container'>
			<input
				type='range'
				min={props.min}
				max={props.max}
				value={minVal}
				ref={minValRef}
				onChange={event => {
					const value = Math.min(+event.target.value, maxVal - 1);
					setMinVal(value);
					event.target.value = value.toString();
				}}
				className={classNames('thumb thumb--zindex-3', {
					'thumb--zindex-5': minVal > props.max - 100,
				})}
			/>
			<input
				type='range'
				min={props.min}
				max={props.max}
				value={maxVal}
				ref={maxValRef}
				onChange={event => {
					const value = Math.max(+event.target.value, minVal + 1);
					setMaxVal(value);
					event.target.value = value.toString();
				}}
				className='thumb thumb--zindex-4'
			/>
			<div className='slider'>
				<div className='slider__value'>
					<span>{convertPrice(minVal)} ₽</span>-
					<span>{convertPrice(maxVal)} ₽</span>
				</div>
				<div className='slider__track' />
				<div className='slider__range' />
				<div ref={range} className='slider__range' />
			</div>
		</div>
	);
};

export default MultiRangeSlider;
