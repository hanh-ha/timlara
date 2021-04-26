import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IApplicationState, postLogin } from '../../store';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { InputText } from '../../components';
import Button from '@material-ui/core/Button';
import './style.scss';

export const SignIn = () => {
	const signin = useSelector((state: IApplicationState) => state.signin);
	const { control, handleSubmit, errors } = useForm();
	const dispatch = useDispatch();
	const [submitting, setSubmit] = useState(false);
	const onSubmit = (data: any) => {
		dispatch(postLogin(data));
		setSubmit(true);
	};
	const history = useHistory();
	useEffect(() => {
		if (localStorage.getItem('backoffice_token')) {
			setSubmit(false);
			history.push('/dashboard');
		}
		if (submitting && signin.error) {
			setSubmit(false);
		}
	}, [history, signin, submitting]);
	return (
		<div className='login-content'>
			<div className='main-content'>
				<img style={{ maxWidth: 200 }} src={'/images/logo192.png'} alt='logo' />
				<h1>Timlara BackOffice</h1>
			</div>
			<div className='login-right-form'>
				<form onSubmit={handleSubmit(onSubmit)} className='login-form'>
					<h3 className='form-heading'>Signup your account</h3>
					<Controller as={InputText} name='username' label='Username' error={!!errors.username} control={control} defaultValue='' rules={{ required: true }} />
					<Controller as={InputText} name='password' label='Password' error={!!errors.password} type='password' control={control} defaultValue='' rules={{ required: true }} />
					<Button disabled={submitting} style={{ marginTop: 10 }} type='submit' size='large' color='secondary' variant='contained'>
						Sign in
					</Button>
				</form>
			</div>
		</div>
	);
};
