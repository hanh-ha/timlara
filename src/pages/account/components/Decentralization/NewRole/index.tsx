import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import '../../../../../pages/reset.scss';
import Checkbox from '@material-ui/core/Checkbox';
import '../../../../../pages/reset.scss';
import './style.scss';
import '../../UserList/style.scss';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modal: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	}),
);

export const NewRole = () => {
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
			<button type='button' onClick={handleOpen} className='button_add'>
				Thêm mới
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
						<div className='add__role form-modal'>
							<div className='add__role--title form-modal__title'>Thêm mới vai trò</div>
							<div className='add__role--form '>
								<div className='add__role--content '>
									<div className='item'>
										<label htmlFor=''>Tên vai trò</label>
										<input type='text' placeholder='Nhập tên vai trò' />
									</div>
									<div className='item'>
										<label htmlFor=''>Định nghĩa chung</label>
										<input type='text' placeholder='Nhập nội dung định nghĩa tại đây..' />
									</div>
								</div>
								<div className='add__role--table '>
									<div className='TableUser__background'>
										<table className='TableUser__list'>
											<thead>
												<tr>
													<th>Quyền hạn</th>
													<th>Xem</th>
													<th>Tạo/ Chỉnh sửa/ Xóa</th>
													<th>Duyệt tin</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Tin đăng</td>
													<td>
														<Checkbox />
													</td>
													<td>
														<Checkbox />
													</td>
													<td>
														<Checkbox />
													</td>
												</tr>
												<tr>
													<td>Dịch vụ</td>
													<td>
														<Checkbox />
													</td>
													<td>
														<Checkbox />
													</td>
													<td>
														<Checkbox />
													</td>
												</tr>
												<tr>
													<td>Giao dịch</td>
													<td>
														<Checkbox />
													</td>
													<td>
														<Checkbox />
													</td>
													<td>
														<Checkbox />
													</td>
												</tr>
												<tr>
													<td>Tài khoản</td>
													<td>
														<Checkbox />
													</td>
													<td>
														<Checkbox />
													</td>
													<td>
														<Checkbox />
													</td>
												</tr>
												<tr>
													<td>Thông báo</td>
													<td>
														<Checkbox />
													</td>
													<td>
														<Checkbox />
													</td>
													<td>
														<Checkbox />
													</td>
												</tr>
												<tr>
													<td>Danh mục</td>
													<td>
														<Checkbox />
													</td>
													<td>
														<Checkbox />
													</td>
													<td>
														<Checkbox />
													</td>
												</tr>
												<tr>
													<td>Báo cáo thống kê</td>
													<td>
														<Checkbox />
													</td>
													<td>
														<Checkbox />
													</td>
													<td>
														<Checkbox />
													</td>
												</tr>
												<tr>
													<td>Cấu hình chung</td>
													<td>
														<Checkbox />
													</td>
													<td>
														<Checkbox />
													</td>
													<td>
														<Checkbox />
													</td>
												</tr>
												<tr>
													<td>Trang nội dung</td>
													<td>
														<Checkbox />
													</td>
													<td>
														<Checkbox />
													</td>
													<td>
														<Checkbox />
													</td>
												</tr>
												<tr>
													<td>Sao chép Tin đăng</td>
													<td>
														<Checkbox />
													</td>
													<td>
														<Checkbox />
													</td>
													<td>
														<Checkbox />
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<div className='form_button'>
								<Button variant='outlined'>Hủy bỏ</Button>
								<Button variant='outlined' type='submit'>
									Tạo mới
								</Button>
							</div>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};
