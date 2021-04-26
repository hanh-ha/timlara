import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import VisibilityIcon from '@material-ui/icons/Visibility';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modal: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	}),
);

export const InforMember = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const [checked, setChecked] = React.useState(true);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.stopPropagation();
		setChecked(event.target.checked ? true : false);
	};

	return (
		<div>
			<button type='button' onClick={handleOpen}>
				<VisibilityIcon />
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
						<div className='PacketNew_wrapper'>
							<div className='title'>
								<h3>THÔNG TIN CHI TIẾT</h3>
							</div>
							<div className='PacketNew_content'>
								<div className=' infoPopup'>
									<span>Ngày đăng ký: 01/01/2020</span>
									<span>Mã thành viên: TV_01</span>
								</div>
								<form className='PacketNew__form'>
									<div className='PacketNew__form--file'>
										<TextField disabled id='standard-disabled' label='Tên đăng nhập' defaultValue='hạnh' />
										<TextField disabled id='standard-disabled' label='Giới tính' defaultValue='nữ' />
										<TextField disabled id='standard-disabled' label='Số điện thoại' defaultValue='0969800508' />
										<TextField disabled id='standard-disabled' label='Email' defaultValue='haminhhanh1997bkhn@gmail.com' />
										<TextField disabled id='standard-disabled' label='Địa chỉ' defaultValue='Mễ trì hạ' />
										<TextField disabled id='standard-disabled' label='Dịch vụ cửa hàng' defaultValue='không sử dụng' />
										<Switch checked={checked} onChange={handleChange} color='primary' name='modalStatus' />
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
