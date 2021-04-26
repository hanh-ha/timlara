import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import { NewRole } from './NewRole';
import '../UserList/style.scss';
import './style.scss';

export const Decentralization = () => {
	return (
		<div className='Decentralization'>
			<div className='Decentralization__form--button'>
				<button>
					<NewRole />
				</button>
			</div>
			<div className='Decentralization__form TableUser table-wrapper'>
				<div className='Decentralization__form--table TableUser__list '>
					<table>
						<thead>
							<tr>
								<th>Vai trò</th>
								<th>Định nghĩa chung</th>
								<th>Thao tác</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>quan tri vien</td>
								<td>
									Nhà quản trị hay quản trị viên là người làm việc trong tổ chức, những người có nhiệm vụ thực hiện chức năng quản trị trong phạm vi được phân công phụ trách, được
									giao nhiệm vụ điều khiển công việc của người khác và chịu trách nhiệm trước kết quả hoạt động của những người đó
								</td>
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
