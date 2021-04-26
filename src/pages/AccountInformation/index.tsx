import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import Button from '@material-ui/core/Button';
import { TransitionsModal } from './components/Modal/index';
import './style.scss';
import { Sidebar } from '../../components';
import { MenuPopupState } from '../../components/Account/AccountButton';

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
	},
	input: {
		display: 'none',
	},
}));

export const AccountInformation = () => {
	const classes = useStyles();

	return (
		<div className='page-wrapper'>
			<div className='page-left'>
				<div className='page_sidebar'>
					<Sidebar />
				</div>
			</div>
			<div className='page-right'>
				<div className='page_menu'>
					<MenuPopupState />
				</div>
				<div className='AccountInformation'>
					<div className='AccountInformation_wrapper'>
						<div className='title'>
							<h3>Thông tin tài khoản</h3>
						</div>
						<div className='AccountInformation'>
							<div className='AccountInformation__avata'>
								<input accept='image/*' className={classes.input} id='icon-button-file' type='file' />
								<label htmlFor='icon-button-file'>
									<IconButton color='primary' aria-label='upload picture' component='span'>
										<PhotoCamera />
									</IconButton>
								</label>
							</div>
							<div className='AccountInformation__form'>
								<FormControl className={classes.margin}>
									<InputLabel htmlFor='input-with-icon-adornment'>Tên đăng nhập</InputLabel>
									<Input
										id='input-with-icon-adornment'
										startAdornment={
											<InputAdornment position='start'>
												<AccountCircle />
											</InputAdornment>
										}
										className='Account-input'
									/>
								</FormControl>
								<FormControl className={classes.margin}>
									<InputLabel htmlFor='input-with-icon-adornment'>Số điện thoại</InputLabel>
									<Input
										id='input-with-icon-adornment'
										startAdornment={
											<InputAdornment position='start'>
												<ContactPhoneIcon />
											</InputAdornment>
										}
										className='Account-input'
									/>
								</FormControl>
								<Input defaultValue='Email' disabled inputProps={{ 'aria-label': 'description' }} className='Account-input' />
								<Input defaultValue='Vai trò' disabled inputProps={{ 'aria-label': 'description' }} className='Account-input' />
								<TransitionsModal />
								<Button variant='outlined'>Cập nhật</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
