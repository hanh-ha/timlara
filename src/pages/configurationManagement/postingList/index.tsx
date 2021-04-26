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
						<span>Cấu Hình</span>
						<span>
							<ArrowForwardIosIcon />
						</span>
						<span>Sao Chép Tin Đăng</span>
					</div>
					<div className='Account tab__wrapper'>
						<div className='Account__title tab___content'>
							<Button>Danh Sách Đăng Ký</Button>
						</div>
					</div>
					<div className='TableList table-wrapper'>
						<div className='search '>
							<input type='text' placeholder='Nhập link tin đăng tại đây...' />
							<button>Lấy Thông tin</button>
						</div>
						<div className='TableList__button'>
							<div className=''>
								<button className='button_danger'>100 Tin</button>
								<button className='button_save'>Chờ duyệt</button>
								<button className='button_save'>Đã duyệt</button>
								<input type='text' className='form-input' placeholder='Tìm người duyệt tại đây....' />
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
										xem thêm các bảng
									</Button>
									<Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}>
										<ul id='columns-dropdown'>
											<li>
												<Checkbox defaultChecked name='order' className='col-checkbox' onChange={onChange} />
												STT
											</li>
											<li>
												<Checkbox defaultChecked name='codePost' className='col-checkbox' onChange={onChange} />
												Mã tin
											</li>
											<li>
												<Checkbox defaultChecked name='name' className='col-checkbox' onChange={onChange} />
												Tên tin đăng
											</li>
											<li>
												<Checkbox defaultChecked name='codeMember' className='col-checkbox' onChange={onChange} />
												Mã Thành viên
											</li>
											<li>
												<Checkbox defaultChecked name='typeCode' className='col-checkbox' onChange={onChange} />
												Loại tin đăng
											</li>
											<li>
												<Checkbox defaultChecked name='address' className='col-checkbox' onChange={onChange} />
												Khu vực bán
											</li>
											<li>
												<Checkbox defaultChecked name='status' className='col-checkbox' onChange={onChange} />
												Tình trạng duyệt
											</li>
											<li>
												<Checkbox defaultChecked name='statusUse' className='col-checkbox' onChange={onChange} />
												Tình trạng sử dụng
											</li>
											<li>
												<Checkbox defaultChecked name='date' className='col-checkbox' onChange={onChange} />
												Ngày duyệt
											</li>
											<li>
												<Checkbox defaultChecked name='user' className='col-checkbox' onChange={onChange} />
												Người duyệt
											</li>
											<li>
												<Checkbox defaultChecked name='action' className='col-checkbox' onChange={onChange} />
												Thao tác
											</li>
										</ul>
									</Popover>
								</div>

								<table>
									<thead>
										{columnsShow.indexOf('order') !== -1 ? <th className='col-name'>STT</th> : null}
										{columnsShow.indexOf('codePost') !== -1 ? <th className='col-last-name'>Mã tin</th> : null}
										{columnsShow.indexOf('name') !== -1 ? <th className='col-phone-number'>Tên tin đăng</th> : null}
										{columnsShow.indexOf('codeMember') !== -1 ? <th className='col-city'>Mã Thành viên</th> : null}
										{columnsShow.indexOf('typeCode') !== -1 ? <th className='col-city'>Loại tin đăng</th> : null}
										{columnsShow.indexOf('address') !== -1 ? <th className='col-city'>Khu vực bán</th> : null}
										{columnsShow.indexOf('status') !== -1 ? <th className='col-city'>Tình trạng duyệt</th> : null}
										{columnsShow.indexOf('statusUse') !== -1 ? <th className='col-city'>Tình trạng sử dụng</th> : null}
										{columnsShow.indexOf('date') !== -1 ? <th className='col-city'>Ngày duyệt</th> : null}
										{columnsShow.indexOf('user') !== -1 ? <th className='col-city'>Người duyệt</th> : null}
										{columnsShow.indexOf('action') !== -1 ? <th className='col-city'>Thao tác</th> : null}
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
