import React from 'react';
import { Sidebar } from '../../components';
import { MenuPopupState } from '../../components/Account/AccountButton';
import './style.scss';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { QuicklyCategory } from './quicklyCategory';
import { NewCategory } from './newCategory';

export const Category = () => {
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
				<div className='tab__wrapper'>
					<div className='Breadcrumb'>
						<span>Danh Mục</span>
					</div>
				</div>
				<div className=' category'>
					<div className='TableList table-wrapper'>
						<div className='TableList__content TableUser '>
							<div className='TableUser__list TableUser__list'>
								<div className='TableList__button'>
									<div className='TableList__button--left'>
										<button className='button_blue '>Xóa danh mục chọn</button>
										<button className='button_blue '>Xóa tất cả danh mục</button>
										<QuicklyCategory />
									</div>
									<div className=''>
										<NewCategory />
									</div>
								</div>
								<div className='TableUser__list--content'>
									<div className='title'>Home</div>
									<div className='category__content'>
										<div className='category__content--item'>
											<Accordion className='item '>
												<AccordionSummary className='item-title ' expandIcon={<ExpandMoreIcon />}>
													<div className='parent-category category__item'>
														<div className='left'>
															<div className='check-box'>
																<Checkbox />
															</div>
															<div className='form-input'>
																<span>Thời trang</span>
															</div>
															<div className='switch'>
																<Switch />
															</div>
														</div>
														<div className='action'>
															<div>
																<VisibilityIcon />
															</div>
															<div className='EditIcon'>
																<EditIcon />
															</div>
															<div className='DeleteIcon'>
																<DeleteIcon />
															</div>
														</div>
													</div>
												</AccordionSummary>
												<AccordionDetails className='item-content'>
													<div className='sub-category category__item'>
														<div className='left'>
															<div className='check-box'>
																<Checkbox />
															</div>
															<div className='form-input'>
																<span>Giày dép</span>
															</div>
															<div className='switch'>
																<Switch />
															</div>
														</div>
														<div className='action'>
															<div>
																<VisibilityIcon />
															</div>
															<div className='EditIcon'>
																<EditIcon />
															</div>
															<div className='DeleteIcon'>
																<DeleteIcon />
															</div>
														</div>
													</div>
												</AccordionDetails>
												<AccordionDetails className='item-content'>
													<div className='sub-category category__item'>
														<div className='left'>
															<div className='check-box'>
																<Checkbox />
															</div>
															<div className='form-input'>
																<span>Giày dép</span>
															</div>
															<div className='switch'>
																<Switch />
															</div>
														</div>
														<div className='action'>
															<div>
																<VisibilityIcon />
															</div>
															<div className='EditIcon'>
																<EditIcon />
															</div>
															<div className='DeleteIcon'>
																<DeleteIcon />
															</div>
														</div>
													</div>
												</AccordionDetails>
											</Accordion>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
