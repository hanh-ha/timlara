import React from 'react';
import Button from '@material-ui/core/Button';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

export const RegistrationFilter = () => {
	return (
		<div className=''>
			<div className='filter-top'>
				<div className='filter-item'>
					<input placeholder='Mã thành viên' className='form-input' />
				</div>
				<div className='filter-item'>
					<input placeholder='Mã tin' className='form-input' />
				</div>
			</div>
			<div className='filter-bottom'>
				<div className='dates filter-item'>
					<DateRangePicker appearance='default' placeholder='Từ ngày-Đến ngày' style={{ width: 280 }} />
				</div>
				<div className='filter-item'>
					<select className='form-input'>
						<option value=''>Đã duyệt</option>
					</select>
				</div>
				<div className='filter-item'>
					<Button>Tìm kiếm</Button>
				</div>
			</div>
		</div>
	);
};
