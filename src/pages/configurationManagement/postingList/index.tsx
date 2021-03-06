import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import 'rsuite/dist/styles/rsuite-default.css';
import '../../../pages/reset.scss';
import { Sidebar } from '../../../components';
import { MenuPopupState } from '../../../components/Account/AccountButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import '../../../pages/reset.scss';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { SeeDetails } from './seeDetails';
import DeleteIcon from '@material-ui/icons/Delete';
import { Post } from './post';
import Popover from '@material-ui/core/Popover';
import Checkbox from '@material-ui/core/Checkbox';

export const PostingList = () => {
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	const [columnsShow, setColumnsShow] = useState(['order', 'codePost', 'name', 'codeMember', 'typeCode', 'address', 'status', 'statusUse', 'date', 'user', 'action']);
	const onChange = (event) => {
		const targetName = event.target.getAttribute('name');
		console.log('targetName', targetName);
		let newColumnsShow = columnsShow.filter((c) => c !== targetName);
		console.log('newColumnsShow1', newColumnsShow);
		if (event.target.checked) {
			newColumnsShow = [...columnsShow, targetName];
			console.log('newColumnsShow2', newColumnsShow);
		}
		setColumnsShow(newColumnsShow);
		console.log('columnsShow', columnsShow);
	};

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
				<div className='tab__wrapper posting-List '>
					<div className='Breadcrumb'>
						<span>C???u H??nh</span>
						<span>
							<ArrowForwardIosIcon />
						</span>
						<span>Sao Ch??p Tin ????ng</span>
					</div>
					<div className='Account tab__wrapper'>
						<div className='Account__title tab___content'>
							<Button>Danh S??ch ????ng K??</Button>
						</div>
					</div>
					<div className='TableList table-wrapper'>
						<div className='search '>
							<input type='text' placeholder='Nh???p link tin ????ng t???i ????y...' />
							<button>L???y Th??ng tin</button>
						</div>
						<div className='TableList__button'>
							<div className=''>
								<button className='button_danger'>100 Tin</button>
								<button className='button_save'>Ch??? duy???t</button>
								<button className='button_save'>???? duy???t</button>
								<input type='text' className='form-input' placeholder='T??m ng?????i duy???t t???i ????y....' />
							</div>
							<div className='action'>
								<div className='icon'>
									<DeleteIcon />
								</div>
								<div className='icon'>
									<Post />
								</div>
							</div>
						</div>
						<div className='TableList__content TableUser'>
							<div className='TableUser__list TableUser__list'>
								<div className='columns-dropdown'>
									<Button onClick={handleClick} className='seemore-table'>
										xem th??m c??c b???ng
									</Button>
									<Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}>
										<ul id='columns-dropdown'>
											<li>
												<Checkbox defaultChecked name='order' className='col-checkbox' onChange={onChange} />
												STT
											</li>
											<li>
												<Checkbox defaultChecked name='codePost' className='col-checkbox' onChange={onChange} />
												M?? tin
											</li>
											<li>
												<Checkbox defaultChecked name='name' className='col-checkbox' onChange={onChange} />
												T??n tin ????ng
											</li>
											<li>
												<Checkbox defaultChecked name='codeMember' className='col-checkbox' onChange={onChange} />
												M?? Th??nh vi??n
											</li>
											<li>
												<Checkbox defaultChecked name='typeCode' className='col-checkbox' onChange={onChange} />
												Lo???i tin ????ng
											</li>
											<li>
												<Checkbox defaultChecked name='address' className='col-checkbox' onChange={onChange} />
												Khu v???c b??n
											</li>
											<li>
												<Checkbox defaultChecked name='status' className='col-checkbox' onChange={onChange} />
												T??nh tr???ng duy???t
											</li>
											<li>
												<Checkbox defaultChecked name='statusUse' className='col-checkbox' onChange={onChange} />
												T??nh tr???ng s??? d???ng
											</li>
											<li>
												<Checkbox defaultChecked name='date' className='col-checkbox' onChange={onChange} />
												Ng??y duy???t
											</li>
											<li>
												<Checkbox defaultChecked name='user' className='col-checkbox' onChange={onChange} />
												Ng?????i duy???t
											</li>
											<li>
												<Checkbox defaultChecked name='action' className='col-checkbox' onChange={onChange} />
												Thao t??c
											</li>
										</ul>
									</Popover>
								</div>

								<table>
									<thead>
										{columnsShow.indexOf('order') !== -1 ? <th className='col-name'>STT</th> : null}
										{columnsShow.indexOf('codePost') !== -1 ? <th className='col-last-name'>M?? tin</th> : null}
										{columnsShow.indexOf('name') !== -1 ? <th className='col-phone-number'>T??n tin ????ng</th> : null}
										{columnsShow.indexOf('codeMember') !== -1 ? <th className='col-city'>M?? Th??nh vi??n</th> : null}
										{columnsShow.indexOf('typeCode') !== -1 ? <th className='col-city'>Lo???i tin ????ng</th> : null}
										{columnsShow.indexOf('address') !== -1 ? <th className='col-city'>Khu v???c b??n</th> : null}
										{columnsShow.indexOf('status') !== -1 ? <th className='col-city'>T??nh tr???ng duy???t</th> : null}
										{columnsShow.indexOf('statusUse') !== -1 ? <th className='col-city'>T??nh tr???ng s??? d???ng</th> : null}
										{columnsShow.indexOf('date') !== -1 ? <th className='col-city'>Ng??y duy???t</th> : null}
										{columnsShow.indexOf('user') !== -1 ? <th className='col-city'>Ng?????i duy???t</th> : null}
										{columnsShow.indexOf('action') !== -1 ? <th className='col-city'>Thao t??c</th> : null}
									</thead>
									<tbody>
										<tr>
											{columnsShow.indexOf('order') !== -1 ? <td className='col-name'>David</td> : null}
											{columnsShow.indexOf('codePost') !== -1 ? <td className='col-last-name'>Martin</td> : null}
											{columnsShow.indexOf('name') !== -1 ? <td className='col-phone-number'>44-5353254</td> : null}
											{columnsShow.indexOf('codeMember') !== -1 ? <td className='col-city'>Tandil</td> : null}
											{columnsShow.indexOf('typeCode') !== -1 ? <th className='col-city'>City</th> : null}
											{columnsShow.indexOf('address') !== -1 ? <th className='col-city'>City</th> : null}
											{columnsShow.indexOf('status') !== -1 ? <th className='col-city'>City</th> : null}
											{columnsShow.indexOf('statusUse') !== -1 ? <th className='col-city'>City</th> : null}
											{columnsShow.indexOf('date') !== -1 ? <th className='col-city'>City</th> : null}
											{columnsShow.indexOf('user') !== -1 ? <th className='col-city'>City</th> : null}
											{columnsShow.indexOf('action') !== -1 ? (
												<th className='col-city'>
													<SeeDetails />
												</th>
											) : null}
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
