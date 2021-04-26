import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import '../../../../pages/reset.scss';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { IApplicationState } from '../../../../store/reducers/state';
import { useEffect, useState } from 'react';
import { filterProduct } from '../../../../store/actions/store';
import { postfilterProduct } from '../../../../store/actions/store';
import { showMessage } from '../../../../store';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modal: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	}),
);

export const AdvertisingArea = () => {
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
			setTags([...tags, { area: event.target.value }]);
			// props.selectedTags([...tags, { area: event.target.value }]);
			event.target.value = '';
		}
	};
	console.log(tags);
	const dispatch = useDispatch();
	const getfilterProduct = useSelector((state: IApplicationState) => {
		return state.filterProduct?.data;
	});
	useEffect(() => {
		dispatch(filterProduct());
	}, [dispatch]);
	const postTagFilter = (tags) => {
		dispatch(postfilterProduct(tags));
		console.log('taaa', tags);
	};
	console.log(getfilterProduct);

	return (
		<div>
			<div onClick={handleOpen}>
				<button className='button_add AdvertisingArea-button'>Khu vực Quảng cáo</button>
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
					<div className=' form-modal advertisement'>
						<div className='form-modal__title'>
							<h3>CHI TIẾT CHIẾN DỊCH</h3>
						</div>
						<div className='form-modal__content'>
							<div className='form'>
								<div className='form_file'>
									<div className='advertisement-select'>
										<Accordion className='advertisement-item item'>
											<AccordionSummary expandIcon={<ExpandMoreIcon />} className='item-title '>
												Khu vực
											</AccordionSummary>
											<AccordionDetails className='item-content'>
												{getfilterProduct.map((tag, index) => (
													<div className='item-list'>
														<span className='form-input'>{tag.area}</span>
														<span>
															<DeleteIcon />
														</span>
													</div>
												))}
											</AccordionDetails>
										</Accordion>
									</div>
									<div className='tags-input'>
										<ul id='tags'>
											{tags.map((tag, index) => (
												<li key={index} className='tag'>
													<span className='tag-title'>{tag.area}</span>
													<span className='tag-close-icon' onClick={() => removeTags(index)}>
														x
													</span>
												</li>
											))}
										</ul>
										<input type='text' onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)} placeholder='nhập vị trí quảng cáo' />
									</div>
									<button
										className='add-tag'
										onClick={() => {
											if (tags?.length > 0) {
												postTagFilter(tags);
											} else {
												dispatch(showMessage('nhap vao', 'error'));
											}
										}}
									>
										Tạo mới
									</button>
								</div>
							</div>
							<div className='form_button'>
								<Button variant='outlined'>Đóng</Button>
							</div>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};
