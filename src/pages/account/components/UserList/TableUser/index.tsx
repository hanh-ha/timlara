import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Checkbox from '@material-ui/core/Checkbox';
import { TableUser_Information } from './TableUser_Information';
import DeleteIcon from '@material-ui/icons/Delete';
import './style.scss';

export const TableUser = () => {
	return (
		<div className='TableUser'>
			<div className='TableUser__search'>
				<button className='button_blue'>xóa user</button>
				<input placeholder='Tìm kiếm tại đây...'></input>
			</div>
			<div className='TableUser__list'>
				<table>
					<thead>
						<tr>
							<th>
								<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
							</th>
							<th>User ID</th>
							<th>Tên đăng nhập</th>
							<th>Số điện thoại</th>
							<th>Email</th>
							<th>Vai trò</th>
							<th>Thao tác</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
							</td>
							<td>1</td>
							<td>50</td>
							<td>Jill</td>
							<td>Jill</td>
							<td>Jill</td>
							<td>
								<div className='action'>
									<TableUser_Information />
									<DeleteIcon />
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};
