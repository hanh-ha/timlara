import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import '../../../../pages/reset.scss';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modal: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	}),
);

export const AdvertisingPosition = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const [tags, setTags]: any = React.useState([]);
	const removeTags = (indexToRemove) => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};
	const addTags = (event) => {
		if (event.target.value !== '') {
			setTags([...tags, event.target.value]);
			event.target.value = '';
		}
	};

	return (
		<div>
			<div onClick={handleOpen}>
				<button className='button_add AdvertisingPosition-button'>Vị trí Quảng cáo</button>
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
					<div className=' form-modal  advertisement AdvertisingPosition'>
						<div className='form-modal__title'>
							<h3>Vị trí Quảng cáo</h3>
						</div>
						<div className='form-modal__content'>
							<div className='form'>
								<div className='form_file'>
									<div className='select-advertisingPosition'>
										<div className='select'>
											<select className='form-input'>
												<option value='volvo'>Máy tính</option>
												<option value='saab'>Web Mobile</option>
												<option value='mercedes'>Ứng dụng</option>
												<option value='audi'>Quảng cáo cơ bản</option>
											</select>
											<ArrowDropDownIcon />
										</div>
										<div className='tag-AdvertisingPosition'>
											<ul id='tags'>
												<li className='tag form-input'>
													<span className='tag-title '>ha noi</span>
													<span className='tag-close-icon'>x</span>
												</li>
											</ul>
										</div>
									</div>
									<div className='tags-input'>
										<ul id='tags'>
											{tags.map((tag, index) => (
												<li key={index} className='tag '>
													<span className='tag-title '>{tag}</span>
													<span className='tag-close-icon' onClick={() => removeTags(index)}>
														x
													</span>
												</li>
											))}
										</ul>
										<textarea className='form-input' onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)} placeholder='Nhập vị trí tại đây ...'></textarea>
										<button className='add-tag'>Taọ mới</button>
									</div>
								</div>
							</div>
							<div className='form_button'>
								<Button variant='outlined' onClick={handleClose}>
									Đóng
								</Button>
							</div>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};
