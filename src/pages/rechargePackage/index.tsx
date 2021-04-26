import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Sidebar } from '../../components';
import { MenuPopupState } from '../../components/Account/AccountButton';
import './style.scss';
import { CreatRecharge } from './creatRecharge';

export const RechargePackage = () => {
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
				<div className='tab__wrapper rechargePackage'>
					<div className='Breadcrumb'>
						<span>Danh Sách Chiến Dịch</span>
					</div>
					<CreatRecharge />
					<div className='TableList table-wrapper'>
						<div className='TableList__content TableUser'>
							<div className='TableUser__list TableUser__list'>
								<table>
									<thead>
										<tr>
											<th>STT</th>
											<th>Mã Gói</th>
											<th>Tên Gói</th>
											<th>Phí</th>
											<th>Khuyến mại</th>
											<th>Thành tiền</th>
											<th>Thời hạn sử dụng</th>
											<th>Thao tác</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>01</td>
											<td>MG_01</td>
											<td>Gói 100.000</td>
											<td>1xx</td>
											<td>10.000</td>
											<td>1xx</td>
											<td>12 tháng</td>
											<td>
												<EditIcon />
												<DeleteIcon />
											</td>
										</tr>
										<tr>
											<td>01</td>
											<td>0123</td>
											<td>Thời trang công sở</td>
											<td>TV01</td>
											<td>18/02/2021</td>
											<td>19/02/2021</td>
											<td>Đã duyệt</td>
											<td>
												<EditIcon />
												<DeleteIcon />
											</td>
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
