import { useEffect, useState } from 'react';
import { AddUser } from './AddUser';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import './style.scss';
import VisibilityIcon from '@material-ui/icons/Visibility';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../../../store/actions/user';
import { IApplicationState } from '../../../../store/reducers/state';
import { addUser, deleteUser } from '../../../../store/actions/user';
import { indexOf } from 'lodash';

export const UserList = () => {
	const dispatch = useDispatch();
	const users = useSelector((state: IApplicationState) => {
		return state.getUsers?.data;
	});

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	const newUser = (user) => {
		dispatch(addUser(user));
	};

	const [selectedId, setSelectedId]: any = useState([]);

	const onChange = (event) => {
		const { id, checked } = event.target;
		if (checked) {
			setSelectedId([...selectedId, id]);
		} else {
			const filterIds = selectedId.filter((s: string) => s !== id);
			setSelectedId(filterIds);
		}
	};

	const removeUser = (deleUserIds: string[]) => {
		dispatch(deleteUser(deleUserIds));
	};

	console.log('users', users, selectedId);
	return (
		<div className='User-List'>
			<div className='Add-user'>
				<AddUser newUser={newUser} />
			</div>
			<div className='table-user table-wrapper'>
				<div className='TableUser'>
					<div className='TableUser__search'>
						<button
							className='button_blue'
							onClick={() => {
								if (selectedId?.length > 0) {
									removeUser(selectedId);
								}
							}}
						>
							xóa user
						</button>
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
								{users.map((item: any, index: number) => {
									const checked = indexOf(selectedId, item.id) !== -1;
									return (
										<tr>
											<td>
												{/* <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} checked={item.checked} /> */}
												<input type='checkbox' name='newsletter' checked={checked} id={item.id} onChange={onChange} />
											</td>
											<td>{index}</td>
											<td>{item.name}</td>
											<td>{item.email}</td>
											<td>{item.role}</td>
											<td>{item.phone}</td>
											<td>
												<div className='action'>
													<VisibilityIcon />
													<DeleteIcon />
												</div>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};
