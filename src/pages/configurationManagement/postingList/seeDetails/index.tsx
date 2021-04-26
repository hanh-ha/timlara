import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import '../../../../pages/reset.scss';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modal: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	}),
);

export const SeeDetails = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<div onClick={handleOpen}>
				<span>Xem chi tiết</span>
			</div>
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
					<div className=' form-modal  '>
						<div className='form-modal__title'>
							<h3>THÔNG TIN CHI TIẾT</h3>
						</div>
						<div className='form-modal__content'>
							<form className='form'>
								<div className='form_file SeeDetails'>
									<div className='infoDetails'>
										<div className='title item'>
											<label htmlFor=''>Tiêu đề</label>
											<div className='form-input'>
												<span> Áo thun nữ tay lỡ Hàn Quốc, chữ T basic – Milla VNXK dư xịn</span>
											</div>
										</div>
										<div className='left item'>
											<label htmlFor=''>Hình thức</label>
											<div className='form-input'>
												<span> Cần bán</span>
											</div>
										</div>
										<div className='right item'>
											<label htmlFor=''>Danh mục</label>
											<div className='form-input'>
												<span> Thời trang</span>
											</div>
										</div>
										<div className='left item'>
											<label htmlFor=''>Đối tượng</label>
											<div className='form-input'>
												<span>Cá nhân</span>
											</div>
										</div>
										<div className='right item'>
											<label htmlFor=''>Giá</label>
											<div className='form-input'>
												<span>Giá đề xuất</span>
											</div>
										</div>
										<div className='left item'>
											<label htmlFor=''>Tình trạng</label>
											<div className='form-input'>
												<span> Đã qua sử dụng</span>
											</div>
										</div>
										<div className='right item'>
											<label htmlFor=''>Khu vực</label>
											<div className='form-input'>
												<span>Phương Canh, Nam Từ Liêm, Hà Nội</span>
											</div>
										</div>
										<div className='describe item'>
											<label htmlFor=''>Mô tả chi tiết</label>
											<div className='form-input'>
												<span>- Áo thun nữ tay lỡ chữ T nữ xuất Hàn dư xịn. - Màu: 5 màu (xem bên dưới) </span>
											</div>
										</div>
									</div>
									<div className='info-user'>
										<div className='avata'>
											<Avatar alt='Remy Sharp' src='https://i.pinimg.com/564x/36/0d/c1/360dc143a4529ea0e174a7e6c2b9245c.jpg' />
										</div>
										<div className='info'>
											<div className='info-item'>
												<label htmlFor=''>Họ và tên</label>
												<span>Nguyễn Bá Huy</span>
											</div>
											<div className='info-item'>
												<label htmlFor=''>Số điện thoại</label>
												<input type='text' placeholder='' />
												<EditIcon />
											</div>
											<div className='info-item'>
												<label htmlFor=''>Email</label>
												<input type='text' />
												<EditIcon />
											</div>
											<div className='info-item'>
												<label htmlFor=''>Địa chỉ</label>
												<input type='text' />
												<EditIcon />
											</div>
											<div className='info-item'>
												<label htmlFor=''>Ngày tham gia</label>
												<span>23/12/2015</span>
											</div>
										</div>
									</div>
								</div>
								<div className='form_button'>
									<Button variant='outlined' onClick={handleClose}>
										Đóng
									</Button>
								</div>
							</form>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};
