import React from 'react';
import { Sidebar } from '../../../components';
import { MenuPopupState } from '../../../components/Account/AccountButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Switch from '@material-ui/core/Switch';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';

export const PaymentMethod = () => {
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
				<div className='tab__wrapper configuration payment-Method'>
					<div className='Breadcrumb'>
						<span>Cấu Hình</span>
						<span>
							<ArrowForwardIosIcon />
						</span>
						<span>Phương Thức Thanh Toán</span>
					</div>
					<div className='TableList table-wrapper'>
						<div className=''>
							<div className='title'>
								<p>Phương thức thanh toán</p>
							</div>
							<table>
								<thead>
									<tr>
										<th>Phương thức</th>
										<th>Được bật</th>
										<th>Mô tả</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Ví điện tử MoMo</td>
										<td>
											<Switch />
										</td>
										<td>Thực hiện thanh toán qua ví điện tử MoMo</td>
										<td>
											<Link to='/configuration-management/payment-method/momo'>
												<SettingsIcon />
											</Link>
										</td>
									</tr>
									<tr>
										<td>Ví điện tử Zalo Pay</td>
										<td>
											<Switch />
										</td>
										<td>Thanh toán online qua ứng dụng Zalo Pay bằng QRCode</td>
										<td>
											<Link to='/configuration-management/payment-method/zalopay'>
												<SettingsIcon />
											</Link>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className='form-button'>
						<button className='button_save'>Lưu ngay</button>
					</div>
				</div>
			</div>
		</div>
	);
};
