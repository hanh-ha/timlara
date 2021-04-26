import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import '../../../../../pages/reset.scss';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modal: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	}),
);

export const AddUser = ({ newUser }) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleClose = () => {
		setOpen(false);
	};
	const [file, setFile] = React.useState('');
	const handleChange = (event) => {
		setFile(URL.createObjectURL(event.target.files[0]));
	};
	const [user, setUser] = React.useState({
		id: '',
		name: '',
		phone: '',
		email: '',
		role: '',
	});
	const handleOpen = () => {
		setOpen(true);
	};
	const onChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setUser({ ...user, [name]: value });
	};
	const onSubmit = (event) => {
		event.preventDefault();
		handleClose();
	};
	console.log(user);

	return (
		<div>
			<button type='button' onClick={handleOpen}>
				Thêm User
			</button>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div>
						<div className=' form-modal AddUser'>
							<div className='form-modal__title'>
								<h3>Thêm Người Dùng Mới</h3>
							</div>
							<div className='form-modal__content'>
								<div className='note'>
									<p>Gửi thông báo đến người dùng</p>
									<div className=''>
										<span>
											<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
										</span>
										<span>Gửi cho người dùng mới đăng ký 1 email chứa thông tin tài khoản của họ</span>
									</div>
								</div>
								<form className='form ' onSubmit={onSubmit}>
									<div className=' form_file'>
										<div className='form_file_border'>
											<h3>Thông tin cơ bản</h3>
											<div className='avata'>
												<input type='file' onChange={handleChange} className='upload' />

												{!!file && <img src={file} alt='preview' />}
											</div>
											<TextField id='standard-name' label='Tên đăng nhập' name='name' value={user.name} onChange={onChange} />
											<TextField id='standard-name' label='Số điện thoại' name='phone' value={user.phone} onChange={onChange} />
											<TextField id='standard-name' label='Email' name='email' value={user.email} onChange={onChange} />
											<TextField id='standard-name' label='Email' name='role' value={user.role} onChange={onChange} />
											<InputLabel shrink htmlFor='age-native-label-placeholder'>
												Vai trò
											</InputLabel>
											<NativeSelect className='role'>
												<option value=''>Quản trị viên</option>
												<option value={10}>Admin</option>
											</NativeSelect>
											<TextField id='standard-name' label='Thiết lập mật khẩu' name='email' value={user.email} onChange={onChange} />
										</div>
									</div>
									<div className='form_button'>
										<Button variant='outlined'>Hủy bỏ</Button>
										<Button
											variant='outlined'
											type='submit'
											value='Submit'
											onClick={() => {
												newUser(user);
											}}
										>
											Tạo mới
										</Button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};
