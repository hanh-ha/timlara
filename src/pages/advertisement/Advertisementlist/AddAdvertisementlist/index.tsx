import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import '../../../../pages/reset.scss';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import '../../../../pages/reset.scss';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modal: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	}),
);

export const AddAdvertisementlist = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const [AddAdvertisementlist, setAddAdvertisementlist] = React.useState({
		id: '',
		fee: '',
		discount: '',
		date: '',
		note: '',
		area: [],
		category: {},
		typeAdvertisementlist: '',
	});
	const onChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setAddAdvertisementlist({ ...AddAdvertisementlist, [name]: value });
	};
	const onSubmit = (event) => {
		event.preventDefault();
		handleClose();
	};
	console.log(AddAdvertisementlist);

	return (
		<div>
			<div onClick={handleOpen}>
				<button className='button_add'>Thêm Loại Quảng Cáo</button>
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
							<h3>TẠO LOẠI QUẢNG CÁO MỚI</h3>
						</div>
						<div className='form-modal__content'>
							<div className='CampaignList-code'>
								<span>Mã Loai</span>
								<span>
									<strong>CD_01</strong>
								</span>
							</div>
							<form className='form' onSubmit={onSubmit}>
								<div className='form_file'>
									<div className='AddAdvertisementlist__input'>
										<label htmlFor=''>Loại quảng cáo:</label>
										<input
											className='form-input'
											type='text'
											placeholder='Nhập nội dung tại đây...'
											name='typeAdvertisementlist'
											value={AddAdvertisementlist.typeAdvertisementlist}
											onChange={onChange}
										/>
									</div>
									<div className='AddAdvertisementlist'>
										<div className='AddAdvertisementlist__left'>
											<div className='AddAdvertisementlist__item'>
												<label htmlFor=''>Vị trí</label>
												<div className='Accordion'>
													<Accordion className='item  form-input '>
														<AccordionSummary expandIcon={<ExpandMoreIcon />} className='item-title  '>
															Máy tính
														</AccordionSummary>
														<AccordionDetails className='item-content'>
															<button className='form-input'>Danh sách tìm kiếm</button>
															<button className='form-input'>Trang tin đăng</button>
														</AccordionDetails>
													</Accordion>
													<Accordion className='item form-input '>
														<AccordionSummary expandIcon={<ExpandMoreIcon />} className='item-title  '>
															Web Mobile
														</AccordionSummary>
														<AccordionDetails className='item-content'>
															<button className='form-input'>Danh sách tìm kiếm</button>
															<button className='form-input'>Trang tin đăng</button>
														</AccordionDetails>
													</Accordion>
													<Accordion className='item form-input '>
														<AccordionSummary expandIcon={<ExpandMoreIcon />} className='item-title  '>
															Ứng dụng
														</AccordionSummary>
														<AccordionDetails className='item-content'>
															<button className='form-input'>Danh sách tìm kiếm</button>
															<button className='form-input'>Trang tin đăng</button>
														</AccordionDetails>
													</Accordion>
													<Accordion className='item form-input '>
														<AccordionSummary expandIcon={<ExpandMoreIcon />} className='item-title  '>
															Quảng cáo cơ bản
														</AccordionSummary>
														<AccordionDetails className='item-content'>
															<button className='form-input'>Danh sách tìm kiếm</button>
															<button className='form-input'>Trang tin đăng</button>
														</AccordionDetails>
													</Accordion>
												</div>
											</div>
											<div className='AddAdvertisementlist__item'>
												<label htmlFor=''>Phí</label>
												<input type='text' className='form-input' name='fee' value={AddAdvertisementlist.fee} onChange={onChange} />
											</div>
											<div className='AddAdvertisementlist__item'>
												<label htmlFor=''>Chiết khấu</label>
												<input type='text' className='form-input' name='discount' value={AddAdvertisementlist.discount} onChange={onChange} />
											</div>
											<div className='AddAdvertisementlist__item'>
												<label htmlFor=''>Thời hạn sử dụng</label>
												<input type='text' className='form-input' name='date' value={AddAdvertisementlist.date} onChange={onChange} />
											</div>
											<div className='AddAdvertisementlist__item'>
												<label htmlFor=''>Ghi chú</label>
												<textarea name='' id='' className='form-input' value={AddAdvertisementlist.note} onChange={onChange}></textarea>
											</div>
										</div>
										<div className='AddAdvertisementlist__right Accordion'>
											<div className='AddAdvertisementlist__item'>
												<label htmlFor=''>Khu vực:</label>
												<Accordion className='item form-input'>
													<AccordionSummary expandIcon={<ExpandMoreIcon />} className='item-title '>
														Chọn khu vực
													</AccordionSummary>
													<AccordionDetails className='item-content'>
														<button className='form-input'>Danh sách tìm kiếm</button>
														<button className='form-input'>Trang tin đăng</button>
													</AccordionDetails>
												</Accordion>
											</div>
											<div className='AddAdvertisementlist__item'>
												<label htmlFor=''>Danh mục</label>
												<Accordion className='item form-input '>
													<AccordionSummary expandIcon={<ExpandMoreIcon />} className='item-title '>
														<span>Chọn danh mục</span>
													</AccordionSummary>
													<AccordionDetails>
														<Accordion className='item form-input'>
															<AccordionSummary expandIcon={<ExpandMoreIcon />} className='item-title '>
																<span>Thời trang</span>
															</AccordionSummary>
															<AccordionDetails>
																<div className=''>
																	<span>
																		<Checkbox />
																	</span>
																	<span>Quần áo</span>
																</div>
																<div className=''>
																	<span>
																		<Checkbox />
																	</span>
																	<span>Đồng hồ</span>
																</div>
															</AccordionDetails>
														</Accordion>
														<Accordion className='item form-input'>
															<AccordionSummary expandIcon={<ExpandMoreIcon />} className='item-title '>
																<span>Đồ điện tử</span>
															</AccordionSummary>
															<AccordionDetails>
																<div className=''>
																	<span>
																		<Checkbox />
																	</span>
																	<span>Quần áo</span>
																</div>
																<div className=''>
																	<span>
																		<Checkbox />
																	</span>
																	<span>Đồng hồ</span>
																</div>
															</AccordionDetails>
														</Accordion>
													</AccordionDetails>
												</Accordion>
											</div>
										</div>
									</div>
								</div>
								<div className='form_button'>
									<Button variant='outlined'>Hủy bỏ</Button>
									<Button variant='outlined' type='submit' value='Submit'>
										Tạo mới
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
