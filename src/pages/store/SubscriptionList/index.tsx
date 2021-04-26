import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import './style.scss';
import '../../../pages/reset.scss';
import { InformationStore } from './informationStore';

export const SubscriptionList = () => {
	return (
		<div className=''>
			<div className='filter'>
				<div className='filter-top'>
					<div className='filter-item'>
						<input placeholder='Mã cửa hàng' className='form-input' />
					</div>
					<div className='filter-item'>
						<input placeholder='Mã thành viên' className='form-input' />
					</div>
					<div className='filter-item'>
						<input placeholder='Mã gói' className='form-input' />
					</div>
				</div>
				<div className='filter-bottom'>
					<div className='dates filter-item'>
						<DateRangePicker appearance='default' placeholder='Từ ngày-Đến ngày' style={{ width: 280 }} />
					</div>
					<div className='filter-item'>
						<select className='form-input'>
							<option value=''>Kích hoạt</option>
						</select>
					</div>
					<div className='filter-item'>
						<input placeholder='Hình thức' className='form-input' />
					</div>
					<div className='filter-item'>
						<Button>Tìm kiếm</Button>
					</div>
				</div>
			</div>
			<div className='TableList table-wrapper'>
				<div className='TableList__button'>
					<Button className='button_blue' variant='outlined'>
						Kích hoạt cửa hàng
					</Button>
					<Button className='button_blue' variant='outlined'>
						Khóa cửa hàng
					</Button>
				</div>
				<div className='TableList__content TableUser'>
					<div className='TableUser__list TableUser__list'>
						<table>
							<thead>
								<tr>
									<th>
										<Checkbox />
									</th>
									<th>STT</th>
									<th>Mã cửa hàng</th>
									<th>Tên cửa hàng</th>
									<th>Ảnh đại diện</th>
									<th>Ảnh bìa</th>
									<th>Mã thành viên</th>
									<th>Mã gói</th>
									<th>Hình thức</th>
									<th>Ngày tạo</th>
									<th>Hạn sử dụng</th>
									<th>Trạng thái</th>
									<th>Thao tác</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<Checkbox />
									</td>
									<td>01</td>
									<td>CH_01</td>
									<td>Thời trang công sở</td>
									<td>
										<img src='https://toquoc.mediacdn.vn/Uploaded/Haln/2017_09_02/image8_RSPZ.PNG' alt='' />
									</td>
									<td>
										<img src='https://toquoc.mediacdn.vn/Uploaded/Haln/2017_09_02/image8_RSPZ.PNG' alt='' />
									</td>
									<td>TV01</td>
									<td>MG_01</td>
									<td>Gia hạn</td>
									<td>01/01/2020</td>
									<td>01/01/2020</td>
									<td>
										<Switch />
									</td>
									<td>
										<InformationStore />
									</td>
								</tr>
								<tr>
									<td>
										<Checkbox />
									</td>
									<td>01</td>
									<td>CH_01</td>
									<td>Thời trang công sở</td>
									<td>
										<img src='https://toquoc.mediacdn.vn/Uploaded/Haln/2017_09_02/image8_RSPZ.PNG' alt='' />
									</td>
									<td>
										<img src='https://toquoc.mediacdn.vn/Uploaded/Haln/2017_09_02/image8_RSPZ.PNG' alt='' />
									</td>
									<td>TV01</td>
									<td>MG_01</td>
									<td>Gia hạn</td>
									<td>01/01/2020</td>
									<td>01/01/2020</td>
									<td>
										<Switch />
									</td>
									<td>
										<InformationStore />
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
