import React, { useState } from 'react';
import { Sidebar } from '../../../../components';
import { MenuPopupState } from '../../../../components/Account/AccountButton';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Switch from '@material-ui/core/Switch';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

export const NewContentPage = ({ initialContent = '', title, onSubmit }) => {
	const [content, setContent] = useState(initialContent);
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const useStyles = makeStyles((theme: Theme) =>
		createStyles({
			modal: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			},
		}),
	);
	const classes = useStyles();

	return (
		<div className='page-wrapper'>
			<div className='page-left'>
				<div className='page_sidebar'>
					<Sidebar />
				</div>
			</div>
			<div className='page-right'>
				<div className='page_menu'>
					<MenuPopupState />
				</div>
				<div className='tab__wrapper NewcontentPage contentPage'>
					<div className='Breadcrumb'>
						<span>
							<span>Cấu Hình</span>
							<span>
								<ArrowForwardIosIcon />
							</span>
							<strong>Trang Nội Dung</strong>
							<span>
								<ArrowForwardIosIcon />
							</span>
							<strong>Tạo Mới</strong>
						</span>
					</div>
					<div className='NewcontentPage-content'>
						<div className='NewcontentPage-left'>
							<button className='button_save save '>Lưu ngay</button>
							<div className='TableList table-wrapper'>
								<h4>Nội dung trang</h4>
								<div className='title'>
									<span>Tiêu đề</span>
									<input type='text' className='form-input' />
								</div>
								<div className='content'>
									<span>Nội dung</span>
									<SunEditor
										autoFocus={true}
										lang='en'
										setOptions={{
											showPathLabel: false,
											minHeight: '50vh',
											maxHeight: '50vh',
											placeholder: 'Enter your text here!!!',
											buttonList: [
												['undo', 'redo'],
												['font', 'fontSize', 'formatBlock'],
												['paragraphStyle'],
												['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
												['fontColor', 'hiliteColor'],
												['removeFormat'],
												'/', // Line break
												['outdent', 'indent'],
												['align', 'horizontalRule', 'list', 'lineHeight'],
												['table', 'link', 'image'],
											],
											formats: ['p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
											font: [
												'Arial',
												'Calibri',
												'Comic Sans',
												'Courier',
												'Garamond',
												'Georgia',
												'Impact',
												'Lucida Console',
												'Palatino Linotype',
												'Segoe UI',
												'Tahoma',
												'Times New Roman',
												'Trebuchet MS',
											],
										}}
										setContents={initialContent}
										onChange={setContent}
									/>
									<div>{content}</div>
								</div>
							</div>
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
							<div className='form-button'>
								<button className='button_danger'>Xóa trang</button>
								<button className='button_save'>Lưu ngay</button>
							</div>
						</div>
						<div className='NewcontentPage-right'>
							<div className='display form-input'>
								<span>Hiển thị</span>
								<Switch />
							</div>
							<div className='display-position form-input'>
								<div className='add'>
									<span>Menu</span>
									<div>
										<button type='button' onClick={handleOpen}>
											Thêm vào menu
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
												<div className=' form-modal '>
													<div className='form-modal__title'>
														<h3>Gắn lên menu dưới đây</h3>
													</div>
													<form className='form-modal__content add-menu'>
														<div className='footer form-input form-pageContent'>
															<div className='list-contentPage active'>
																<span className='title'>Footer</span>
																<span className='button'>Thêm vào menu</span>
															</div>
															<div className='list-contentPage'>
																<span className='title'>Điều khoản</span>
																<span className='button'>Thêm vào menu</span>
															</div>
															<div className='list-contentPage'>
																<span className='title'>Chính sách</span>
																<span className='button'>Thêm vào menu</span>
															</div>
															<div className='list-contentPage'>
																<span className='title'>Liên hệ</span>
																<span className='button'>Thêm vào menu</span>
															</div>
														</div>
														<div className='header form-input form-pageContent'>
															<div className='list-contentPage active'>
																<span className='title'>Header</span>
																<span className='button'>Thêm vào menu</span>
															</div>
															<div className='list-contentPage'>
																<span className='title'>Điều khoản</span>
																<span className='button'>Thêm vào menu</span>
															</div>
														</div>
														<div className='form_button'>
															<Button variant='outlined' onClick={handleClose}>
																Đóng
															</Button>
														</div>
													</form>
												</div>
											</Fade>
										</Modal>
									</div>
								</div>
								<div className='delete'>
									<span>Footer</span>
									<span>
										<DeleteIcon />
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
