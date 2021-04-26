import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import '../../../../pages/reset.scss';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modal: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	}),
);

export const Post = () => {
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
				<CloudUploadIcon />
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
							<h3>Đăng Tin Đã Chọn</h3>
						</div>
						<div className='form-modal__content'>
							<form className='form'>
								<div className='form_file post'>
									<div className='title'>
										<span>Khu vực</span>
									</div>
									<div className='post-content'>
										<div className='post-item left'>
											<label htmlFor=''>Quận/ Huyện</label>
											<select className='form-input' placeholder='Bạn chọn vùng nào?'>
												<option value=''>Thái Bình</option>
											</select>
										</div>
										<div className='post-item right'>
											<label htmlFor=''>Danh mục</label>
											<select className='form-input' placeholder='Bạn chọn danh mục nào?'>
												<option value=''>Thái Bình</option>
											</select>
										</div>
										<div className='post-item left'>
											<label htmlFor=''>Thành phố/ Tỉnh</label>
											<select className='form-input' placeholder='Bạn chọn vùng nào?'>
												<option value=''>Thái Bình</option>
											</select>
										</div>
										<div className='post-item right'>
											<label htmlFor=''>Hình thức</label>
											<select className='form-input' placeholder='Bạn chọn hình thức nào?'>
												<option value=''>Thái Bình</option>
											</select>
										</div>
										<div className='post-item right'>
											<label htmlFor=''>Đối tượng</label>
											<select className='form-input' placeholder='Bạn chọn đối tượng nào?'>
												<option value=''>Thái Bình</option>
											</select>
										</div>
									</div>
									<div className='form_button'>
										<Button variant='outlined'>Đăng ngay</Button>
										<Button variant='outlined' onClick={handleClose}>
											Hủy bỏ
										</Button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};
