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
							<h3>Th??ng Tin C?? B???n</h3>
						</div>
						<div className='form-modal__content'>
							<div className='informationStore__item'>
								<label htmlFor=''>Gi???i thi???u ng???n</label>
								<div className='content'>
									<span>Chuy??n cung c???p c??c d??ng s???n ph???m th???i trang hi???n ?????i, sang tr???ng,... t???i ph??i ?????p!</span>
								</div>
							</div>
							<div className='informationStore__item'>
								<label htmlFor=''>M?? t??? chi ti???t</label>
								<div className='content'>
									<span>
										T??? h??o l?? th????ng hi???u th???i trang Vi???t Nam, c???a h??ng kh??ng ng???ng s??ng t???o trong vi???c t??m ki???m, l??m vi???c v???i nh???ng ?????i t??c th???i trang l???n tr??n th??? gi???i c??ng v???i
										ph??t huy s???c m???nh n???i t???i gi??p c???a h??ng c?? ???????c kinh nghi???m d??y d???n trong vi???c ????p ???ng d??ng s???n ph???m cao c???p (Hi-End) ti??u chu???n qu???c t??? t???i Vi???t Nam, c???a ng?????i
										Vi???t Nam.
									</span>
								</div>
							</div>
							<form onSubmit={onSubmit}>
								<div className='informationStore__item'>
									<label htmlFor=''>Li??n h???</label>
									<div className='content'>
										<div className='content__item'>
											<label htmlFor=''>S??? ??i???n tho???i</label>
											<input className='form-input' placeholder='nh???p s??? ??i???n tho???i'></input>
										</div>
										<div className='content__item'>
											<label htmlFor=''>Email</label>
											<input className='form-input' placeholder='nh???p email'></input>
										</div>
										<div className='content__item'>
											<label htmlFor=''>Website</label>
											<input className='form-input' placeholder='nh???p website'></input>
										</div>
										<div className='content__item'>
											<label htmlFor=''>?????a ch???</label>
											<input className='form-input' placeholder='nh???p ?????a ch???'></input>
										</div>
									</div>
								</div>
								<div className='informationStore__item'>
									<div className='content category__group'>
										<div className=''>
											<label htmlFor=''>Danh M???c Ch??nh</label>
											<select className='form-input'>
												<option>Th???i trang</option>
												<option>???m th???c</option>
											</select>
										</div>
										<div className=''>
											<label htmlFor=''>Danh m???c con</label>
											<select className='form-input'>
												<option>Qu???n ??o</option>
												<option>????? trang ??i???m</option>
											</select>
										</div>
									</div>
								</div>
								<div className='informationStore__item'>
									<label htmlFor=''>Thi???t l???p b??? l???c s???n ph???m, d???ch v???</label>
									<div className='content filter-group'>
										<div className='lable-group'>
											<span>T??n thu???c t??nh</span>
											<span>Gi?? tr???</span>
										</div>
										<div className='filter-item'>
											<div className='filter-group--item'>
												<button className='form-input lable'>Gi??</button>
												<div className=' text-content'>
													<input
														type='text'
														className='form-input'
														placeholder='nh???p gi?? tr???...'
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
												<button className='form-input lable'>K??ch th?????c</button>
												<div className=' text-content'>
													<input type='text' className='form-input' placeholder='nh???p gi?? tr???...' name='size' />
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
									<Button variant='outlined'>K??ch ho???t</Button>
									<Button variant='outlined' type='submit' value='Submit'>
										H???y b???
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
