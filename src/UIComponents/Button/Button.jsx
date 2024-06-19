import React, { memo } from 'react';
import cls from './Button.module.css';

const Button = memo(props => {
	return (
		<button
			className={
				props.className ? `${cls.Button} ${props.className}` : `${cls.Button}`
			}
			{...props}
		/>
	);
});

export default Button;
