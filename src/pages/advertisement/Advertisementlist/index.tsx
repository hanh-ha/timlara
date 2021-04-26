import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import 'rsuite/dist/styles/rsuite-default.css';
import Checkbox from '@material-ui/core/Checkbox';
import '../../../pages/reset.scss';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { AddAdvertisementlist } from './AddAdvertisementlist';
import './style.scss';
import { AdvertisingPosition } from './AdvertisingPosition';
import { AdvertisingArea } from './AdvertisingArea';

export const Advertisementlist = () => {
	return (
		<div className=''>
			<div className='Breadcrumb'>
				<span>Danh Sách Quảng Cáo</span>
			</div>
			<div className='filter'>
				<div className="Advertisementlist-filter">
					<div className="left">
						<div className='filter-top'>
							<div className='filter-item'>
								<input placeholder='Mã loại' className='form-input' />
							</div>
							<div className='filter-item'>
								<input placeholder='Tên loại' className='form-input' />
							</div>
						</div>
						<div className='filter-bottom'>
							<div className='filter-item'>
								<input placeholder='Khu vực' className='form-input' />
							</div>
							<div className='filter-item'>
								<input placeholder='Danh mục' className='form-input' />
							</div>
							<div className='filter-item'>
								<Button>Tìm kiếm</Button>
							</div>
						</div>
					</div>
					<div className='AddAdvertisementlist'>
						<AddAdvertisementlist />
					</div>	
				</div>
			</div>
			<div className='TableList table-wrapper'>
				<div className='TableList__button'>
					<Button className='button_blue' variant='outlined'>
						Xóa loại đã chọn
					</Button>
					<div className='group-button'>
						<AdvertisingPosition />
						<AdvertisingArea />
					</div>
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
									<th>Mã loại</th>
									<th>Tên loại</th>
									<th>Khu vực</th>
									<th>Danh mục</th>
									<th>Phí</th>
									<th>Chiết khấu</th>
									<th>Thời hạn sử dụng</th>
									<th>Ghi chú</th>
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
									<td></td>
									<td></td>
									<td>TV01</td>
									<td>MG_01</td>
									<td>Gia hạn</td>
									<td>01/01/2020</td>
									<td>
										<EditIcon />
										<DeleteIcon />
									</td>
									<td></td>
								</tr>
								<tr>
									<td>
										<Checkbox />
									</td>
									<td>01</td>
									<td>CH_01</td>
									<td>Thời trang công sở</td>
									<td></td>
									<td></td>
									<td>TV01</td>
									<td>MG_01</td>
									<td>Gia hạn</td>
									<td>01/01/2020</td>
									<td>
										<EditIcon />
										<DeleteIcon />
									</td>
									<td></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};
