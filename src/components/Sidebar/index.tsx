import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';
import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export const Sidebar = (props) => {
	const [value, setValue] = React.useState();

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className='sider_bar'>
			<div className='s-layout__sidebar'>
				<div className='s-sidebar__trigger'>
					<MenuIcon />
				</div>
				<nav className='s-sidebar__nav'>
					<div className='sider_bar__title'>
						<h2>TIMLARA</h2>
					</div>
					<div className='sider_bar__content'>
						<Tabs orientation='vertical' variant='scrollable' value={value} onChange={handleChange} aria-label='Vertical tabs example'>
							<Tab className='button-tab' label={<Link to='/'>Tổng quan</Link>} />
							<Tab className='button-tab' label={<Link to='/package'>Gói tin</Link>} />
							<Tab className='button-tab' label={<Link to='/account-information'>Dịch vụ</Link>} />
							<Tab className='button-tab' label={<Link to='/advertisement'>Chiến dịch</Link>} />
							<Tab className='button-tab' label={<Link to='/store'>Cửa hàng</Link>} />
							<Tab className='button-tab' label={<Link to='/account-information'>Tin đăng</Link>} />
							<Tab className='button-tab' label={<Link to='/recharge-package'>Gói Nạp Tiền</Link>} />
							<Tab className='button-tab' label={<Link to='/account'>Thành viên</Link>} />
							<Tab className='button-tab' label={<Link to='/account-information'>Thông báo</Link>} />
							<Tab className='button-tab' label={<Link to='/category'>Danh mục</Link>} />
							<Tab className='button-tab' label={<Link to='/account-information'>Báo cáo thống kê</Link>} />
							<Tab className='button-tab' label={<Link to='/configuration-management'>Cấu Hình</Link>} />
						</Tabs>
					</div>
				</nav>
			</div>
		</div>
	);
};
