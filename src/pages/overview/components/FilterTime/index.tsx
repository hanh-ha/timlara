import React from 'react';
import { Instance } from '../../components/Dates';
import './style.scss';

export const FilterTime = () => {
	return (
		<div className='filter-overview'>
			<div className='filter-overview__item'>
				<label>Thời gian</label>
				<select className='form-input'>
					<option value={1}>30 ngày trước</option>
					<option value={2}>tháng trước</option>
					<option value={2}>tháng này</option>
					<option value={2}>tùy chọn</option>
				</select>
			</div>
			<div className='filter-overview__item'>
				<label>Hình thức</label>
				<select className='form-input'>
					<option value={1}>Dịch Vụ Trả Phí Khác</option>
					<option value={2}>Cửa Hàng</option>
					<option value={2}>Quảng Cáo</option>
					<option value={2}>Gói Tin</option>
				</select>
			</div>
			<Instance />
		</div>
	);
};
