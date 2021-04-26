import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import VisibilityIcon from '@material-ui/icons/Visibility';
import '../../../../pages/reset.scss';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
import '../../../../pages/reset.scss';
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { IApplicationState } from '../../../../store/reducers/state';
import { useEffect, useState } from 'react';
import { filterProduct } from '../../../../store/actions/store';
import { postfilterProduct } from '../../../../store/actions/store';
import { any } from 'prop-types';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modal: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	}),
);

export const InformationStore = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const [filter, setFilter] = React.useState({
		price: [4000, 500000],
		size: ['S'],
	});
	const onSubmit = (event) => {
		event.preventDefault();
	};
	const addTags = (event) => {
		const value = event.target.value;
		const name = event.target.name;
		if (value !== '') {
			setFilter({ ...filter, [name]: value });
			event.target.value = '';
		}
		postTagFilter(filter);
	};
	const dispatch = useDispatch();
	const getfilterProduct = useSelector((state: IApplicationState) => {
		return state.filterProduct?.data;
	});
	useEffect(() => {
		dispatch(filterProduct());
	}, [dispatch]);

	const postTagFilter = (filter) => {
		dispatch(postfilterProduct(filter));
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
							<h3>Thông Tin Cơ Bản</h3>
						</div>
						<div className='form-modal__content'>
							<div className='informationStore__item'>
								<label htmlFor=''>Giới thiệu ngắn</label>
								<div className='content'>
									<span>Chuyên cung cấp các dòng sản phẩm thời trang hiện đại, sang trọng,... tới phái đẹp!</span>
								</div>
							</div>
							<div className='informationStore__item'>
								<label htmlFor=''>Mô tả chi tiết</label>
								<div className='content'>
									<span>
										Tự hào là thương hiệu thời trang Việt Nam, cửa hàng không ngừng sáng tạo trong việc tìm kiếm, làm việc với những đối tác thời trang lớn trên thế giới cùng với
										phát huy sức mạnh nội tại giúp cửa hàng có được kinh nghiệm dày dạn trong việc đáp ứng dòng sản phẩm cao cấp (Hi-End) tiêu chuẩn quốc tế tại Việt Nam, của người
										Việt Nam.
									</span>
								</div>
							</div>
							<form onSubmit={onSubmit}>
								<div className='informationStore__item'>
									<label htmlFor=''>Liên hệ</label>
									<div className='content'>
										<div className='content__item'>
											<label htmlFor=''>Số điện thoại</label>
											<input className='form-input' placeholder='nhập số điện thoại'></input>
										</div>
										<div className='content__item'>
											<label htmlFor=''>Email</label>
											<input className='form-input' placeholder='nhập email'></input>
										</div>
										<div className='content__item'>
											<label htmlFor=''>Website</label>
											<input className='form-input' placeholder='nhập website'></input>
										</div>
										<div className='content__item'>
											<label htmlFor=''>Địa chỉ</label>
											<input className='form-input' placeholder='nhập địa chỉ'></input>
										</div>
									</div>
								</div>
								<div className='informationStore__item'>
									<div className='content category__group'>
										<div className=''>
											<label htmlFor=''>Danh Mục Chính</label>
											<select className='form-input'>
												<option>Thời trang</option>
												<option>ẩm thực</option>
											</select>
										</div>
										<div className=''>
											<label htmlFor=''>Danh mục con</label>
											<select className='form-input'>
												<option>Quần áo</option>
												<option>đồ trang điểm</option>
											</select>
										</div>
									</div>
								</div>
								<div className='informationStore__item'>
									<label htmlFor=''>Thiết lập bộ lọc sản phẩm, dịch vụ</label>
									<div className='content filter-group'>
										<div className='lable-group'>
											<span>Tên thuộc tính</span>
											<span>Giá trị</span>
										</div>
										<div className='filter-item'>
											<div className='filter-group--item'>
												<button className='form-input lable'>Giá</button>
												<div className=' text-content'>
													<input
														type='text'
														className='form-input'
														placeholder='nhập giá trị...'
														name='price'
														// onChange={handchange}
														// value={filter.price}
														onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)}
													/>
													<div className='form-button'>
														{getfilterProduct.map((item: any, index: number) => {
															console.log(item.price);
															// const price = item.price;
															// return price.map((item, index) => {
															// 	console.log(item);
															return (
																<button>
																	<span>
																		<ClearIcon />
																	</span>
																</button>
															);
															// });
														})}
													</div>
												</div>
											</div>
											<div className='filter-group--item'>
												<button className='form-input lable'>Kích thước</button>
												<div className=' text-content'>
													<input type='text' className='form-input' placeholder='nhập giá trị...' name='size' />
													<div className='form-button'>
														<button>
															<span>S</span>
															<span>
																<ClearIcon />
															</span>
														</button>
													</div>
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
							</form>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};
