import React from 'react';
import { Form } from 'react-bootstrap';
import Button from '../../../UIComponents/Button';
import cls from './AnswerForm.module.css';

const AnswerForm = () => {
	return (
		<Form className={cls.Form} onSubmit={e => e.preventDefault()}>
			<Form.Control placeholder='впишите ваш email ...' className={cls.Input} />
			<Button className={cls.Button}>Ок</Button>
		</Form>
	);
};

export default AnswerForm;
