import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modal: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	}),
);

export const NewCategory = () => {
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
				<button className='button_add '>THÊM MỚI</button>
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
					<div className=' form-modal '>
						<div className='form-modal__title'>
							<h3>Thêm Mới Danh Mục</h3>
						</div>
						<div className='form-modal__content'>
							<div className='form'>
								<div className='form_file new-categoty'>
									<div className=''>
										<div className=''>
											<div className='choose-category'>
												<div className='tilte'>
													<label htmlFor=''>Tiêu đề</label>
													<input type='text' className='form-input' />
												</div>
												<div className='select-category'>
													<label htmlFor=''>Danh mục cha</label>
													<select name='' id='' className='form-input'>
														<option value=''>Thời trang</option>
														<option value=''>dong ho</option>
													</select>
												</div>
											</div>
											<div className='upload-img'>
												<label htmlFor=''>Ảnh</label>
												<IconButton color='primary' aria-label='upload picture' component='span'>
													<PhotoCamera />
												</IconButton>
											</div>
											<div className='properties'>
												<div className='add-properties'>
													<label htmlFor=''>Bộ thuộc tính</label>
													<button>Thêm mới</button>
												</div>
												<div className='properties-content'>
													<div className='title'>
														<label htmlFor=''>Thuộc tính</label>
														<label htmlFor=''>Thao tác</label>
													</div>
													<div className='content'>
														<div className='content-item'>
															<span>Màu sắc</span>
															<div className='action'>
																<EditIcon />
																<DeleteIcon />
															</div>
														</div>
														<div className='content-item'>
															<span>Màu sắc</span>
															<div className='action'>
																<EditIcon />
																<DeleteIcon />
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className=''>
												<div className='optimal-SEO Accordion'>
													<Accordion className='item form-input '>
														<AccordionSummary className='item-title ' expandIcon={<ExpandMoreIcon />}>
															Tối ưu SEO
														</AccordionSummary>
														<AccordionDetails className='item-content'>
															<div className='optimal-SEO__item'>
																<label htmlFor=''>Tiêu đề trang</label>
																<input type='text' className='form-input' />
															</div>
															<div className='optimal-SEO__item'>
																<label htmlFor=''>Mô tả trang</label>
																<textarea name='' id='' className='form-input'></textarea>
															</div>
															<div className='optimal-SEO__item'>
																<label htmlFor=''>Đường dẫn</label>
																<input type='text' className='form-input' />
															</div>
														</AccordionDetails>
													</Accordion>
												</div>
											</div>
										</div>
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
