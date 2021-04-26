import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import '../../../../pages/reset.scss';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
import './style.scss';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modal: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	}),
);

export const InfoCampaignList = () => {
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
				<VisibilityIcon />
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
					<div className=' form-modal informationStore'>
						<div className='form-modal__title'>
							<h3>CHI TIẾT CHIẾN DỊCH</h3>
						</div>
						<div className='form-modal__content'>
							<div className='CampaignList-code'>
								<span>Mã chiến dịch:</span>
								<span>
									<strong>CD_01</strong>
								</span>
							</div>
							<div className='form'>
								<div className='form_file'>
									<div className='InfoCampaignList__item'>
										<div className='content'>
											<div className='content__item'>
												<label htmlFor=''>Tên chiến dịch</label>
												<input className='form-input' placeholder='Thời trang công sở - duy nhất hôm nay giảm giá 60%' disabled />
											</div>
											<div className='content__item'>
												<label htmlFor=''>Loại quảng cáo</label>
												<input className='form-input' placeholder='Quảng cáo cơ bản (vị trí giữa)' disabled />
											</div>
											<div className='content__item'>
												<label htmlFor=''>Khu vực hiển thị</label>
												<input className='form-input' placeholder='Toàn quốc' disabled />
											</div>
											<div className='content__item'>
												<label htmlFor=''>Danh mục</label>
												<input className='form-input' placeholder='Thời trang' disabled />
											</div>
											<div className='content__item'>
												<label htmlFor=''>Link quảng cáo</label>
												<input className='form-input' placeholder='Thoitrangcongso.com' disabled />
											</div>
											<div className='content__item'>
												<label htmlFor=''>Mô tả ngắn</label>
												<textarea className='form-input' placeholder='Mang đến cho người phụ nữ vẻ đẹp sang trọng, lịch sự, quý phái.' disabled />
											</div>
										</div>
									</div>
								</div>
								<div className='Time__CampaignList'>
									<div className='title'>
										<div className='Code'>
											<span>Mã giao dịch:</span>
											<span>GD_01</span>
										</div>
										<div className='status'>
											<span>Hình thức:</span>
											<span>Mới</span>
										</div>
									</div>
									<div className='content'>
										<div className='content_left'>
											<label htmlFor=''>Mã giao dịch</label>
											<div className='time'>
												<span>GD_01</span>
												<span>GD_04</span>
											</div>
										</div>
										<div className='content_right'>
											<label htmlFor=''>Ngày thực hiện</label>
											<div className='time'>
												<span>2/1/2021</span>
												<span>3/1/2021</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='form_button'>
								<Button variant='outlined'>Kích hoạt</Button>
								<Button variant='outlined' type='submit' value='Submit'>
									Hủy bỏ
								</Button>
							</div>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};
