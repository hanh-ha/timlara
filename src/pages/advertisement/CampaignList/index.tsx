import React from 'react';
import Button from '@material-ui/core/Button';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import '../../../pages/reset.scss';
import { InfoCampaignList } from './InfoCampaignList';

export const CampaignList = () => {
	return (
		<div className=''>
			<div className='Breadcrumb'>
				<span>Danh Sách Chiến Dịch</span>
			</div>
			<div className='filter'>
				<div className='filter-top'>
					<div className='filter-item'>
						<input placeholder='Mã chiến dịch' className='form-input' />
					</div>
					<div className='filter-item'>
						<input placeholder='Mã thành viên' className='form-input' />
					</div>
					<div className='filter-item'>
						<input placeholder='Hình thức' className='form-input' />
					</div>
					<div className='filter-item'>
						<input placeholder='Danh mục' className='form-input' />
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
						<input placeholder='Loại quảng cáo' className='form-input' />
					</div>
					<div className='filter-item'>
						<input placeholder='Khu vực' className='form-input' />
					</div>
					<div className='filter-item'>
						<Button>Tìm kiếm</Button>
					</div>
				</div>
			</div>
			<div className='TableList table-wrapper'>
				<div className='TableList__content TableUser'>
					<div className='TableUser__list TableUser__list'>
						<table>
							<thead>
								<tr>
									<th>STT</th>
									<th>Mã chiến dịch</th>
									<th>Tên chiến dịch</th>
									<th>Mã thành viên</th>
									<th>Ngày đăng ký</th>
									<th>Ngày bắt đầu</th>
									<th>Tình trạng</th>
									<th>Hình thức</th>
									<th>Thao tác</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>01</td>
									<td>0123</td>
									<td>Thời trang công sở</td>
									<td>TV01</td>
									<td>18/02/2021</td>
									<td>19/02/2021</td>
									<td>Đã duyệt</td>
									<td>Gia hạn</td>
									<td>
										<InfoCampaignList />
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
									<td>Gia hạn</td>
									<td>
										<InfoCampaignList />
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};
