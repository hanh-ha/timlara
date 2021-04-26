import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.scss';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));

export const TransitionsModal = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className='Modal__password'>
			<button type='button' onClick={handleOpen}>
				Đổi mật khẩu
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
					<div >
						<div className='Modal__password'>
							<div className='Modal__title'>
								<h3>Thay đổi mật khẩu của bạn</h3>
							</div>
							<div className='password__change'>
								<h3>Nhập mật khẩu hiện tại của bạn</h3>
								<TextField id='outlined-basic' label='Mật khẩu hiện tại...' variant='outlined' />
							</div>
							<div className='content'>
								<div className='password__new'>
									<h3>Nhập mật khẩu mới của bạn</h3>
									<TextField id='outlined-basic' label='Mật khẩu mới...' variant='outlined' />
									<TextField id='outlined-basic' label='Xác nhận mật khẩu mới...' variant='outlined' />
								</div>
							</div>
							<div className='submit'>
								<Button variant='outlined' onClick={handleClose}>
									Hủy bỏ
								</Button>
								<Button variant='outlined'>Cập nhật</Button>
							</div>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};
