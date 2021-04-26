import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './style.scss';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));

export const PacketNew = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className='PacketNew_button'>
			<Button type='button' onClick={handleOpen}>
				Tạo gói tin
			</Button>
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
						<div className='PacketNew_wrapper'>
							<div className='title'>
								<h3>TẠO MỚI GÓI TIN</h3>
							</div>
							<div className='PacketNew_content'>
								<div className='PacketNew_note'>
									<p>Gói Tin được áp dụng với:</p>
									<p>1. Chuyên mục có phí</p>
									<p>2. Tin đăng về Cần bán/ Cho thuê</p>
									<p>3. Không áp dụng đối với banner quảng cáo, quảng cáo cơ bản</p>
								</div>
								<form className='PacketNew__form'>
									<div className='PacketNew__form--file'>
										<TextField id='standard-name' label='Mã gói' name='code' />
										<TextField id='standard-name' label='Tên gói' name='surname' />
										<TextField id='standard-name' label='Phí' name='fees' />
										<TextField id='standard-name' label='Chiết khấu' name='discount' />
										<TextField id='standard-name' label='Số lượng tin' name='number' />
										<TextField id='standard-name' label='Thời hạn sử dụng' name='date' />
									</div>
									<div className='PacketNew__form--button'>
										<Button variant='outlined' onClick={handleClose}>
											Hủy bỏ
										</Button>
										<Button variant='outlined' type='submit' value='Submit'>
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
