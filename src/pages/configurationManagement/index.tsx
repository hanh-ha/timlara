import React from 'react';
import { Sidebar } from '../../components';
import { MenuPopupState } from '../../components/Account/AccountButton';
import SettingsIcon from '@material-ui/icons/Settings';
import BuildIcon from '@material-ui/icons/Build';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import PaymentIcon from '@material-ui/icons/Payment';
import './style.scss';
import { Link } from 'react-router-dom';

export const ConfigurationManagement = () => {
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
				<div className='tab__wrapper configuration'>
					<div className='Breadcrumb'>
						<span>Cấu Hình</span>
					</div>
					<div className='TableList table-wrapper'>
						<div className='configuration-left'>
							<div className='configuration-item'>
								<span className='configuration-item__icon'>
									<BuildIcon />
								</span>
								<span className='configuration-item__title'>
									<Link to='/configuration-management/configuration'>
										<strong>Cấu hình chung</strong>
									</Link>
									<p>Cấu hình thông tin chung hệ thống</p>
								</span>
							</div>
							<div className='configuration-item'>
								<span className='configuration-item__icon'>
									<FilterNoneIcon />
								</span>
								<span className='configuration-item__title'>
									<strong>Trang nội dung</strong>
									<p>Giúp khách hàng hiểu rõ hơn về website</p>
								</span>
							</div>
							<div className='configuration-item'>
								<span className='configuration-item__icon'>
									<AnnouncementIcon />
								</span>
								<span className='configuration-item__title'>
									<strong>Tin tức</strong>
									<p>Cập nhật những thông tin mới nhất</p>
								</span>
							</div>
						</div>
						<div className='configuration-right'>
							<div className='configuration-item'>
								<span className='configuration-item__icon'>
									<SettingsIcon />
								</span>
								<span className='configuration-item__title'>
									<Link to='/configuration-management/posting-list'>
										<strong>Sao Chép Tin Đăng</strong>
									</Link>
									<p>Mang lại hiệu quả khi vận hành hệ thống</p>
								</span>
							</div>
							<div className='configuration-item'>
								<span className='configuration-item__icon'>
									<PaymentIcon />
								</span>
								<span className='configuration-item__title'>
									<Link to='/configuration-management/payment-method'>
										<strong>Phương Thức Thanh Toán</strong>
									</Link>
									<p>Cấu hình phương thức thanh toán</p>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
