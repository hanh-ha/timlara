import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import { NewPacketList } from './NewPacketList';

export const PacketListStore = () => {
	return (
		<div className='PacketListStore'>
			<div className='PacketListStore__form--button'>
				<NewPacketList />
			</div>
			<div className='PacketListStore__form TableUser table-wrapper'>
				<div className='PacketListStore__form--table TableUser__list '>
					<table>
						<thead>
							<tr>
								<th>STT</th>
								<th>Mã Gói</th>
								<th>Tên Gói</th>
								<th>Phí</th>
								<th>Chiết khấu</th>
								<th>Thành tiền</th>
								<th>Loại gói</th>
								<th>Thời hạn sử dụng</th>
								<th>Thao tác</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>01</td>
								<td>MG_01</td>
								<td>Gói 1 thàng</td>
								<td>1xx</td>
								<td>10</td>
								<td>1xx</td>
								<td>Mới</td>
								<td>1 tháng</td>
								<td>
									<DeleteIcon />
									<EditRoundedIcon />
								</td>
							</tr>
							<tr>
								<td>01</td>
								<td>MG_01</td>
								<td>Gói 1 thàng</td>
								<td>1xx</td>
								<td>10</td>
								<td>1xx</td>
								<td>Mới</td>
								<td>1 tháng</td>
								<td>
									<DeleteIcon />
									<EditRoundedIcon />
								</td>
							</tr>
							<tr>
								<td>01</td>
								<td>MG_01</td>
								<td>Gói 1 thàng</td>
								<td>1xx</td>
								<td>10</td>
								<td>1xx</td>
								<td>Mới</td>
								<td>1 tháng</td>
								<td>
									<DeleteIcon />
									<EditRoundedIcon />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
