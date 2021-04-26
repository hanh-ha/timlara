import React from 'react';
import MaterialTable, { Column } from 'material-table';
import { PacketNew } from './components/PacketNew';
import './style.scss';
export const MaterialTableDemo = () => {
	const [state, setState]: [{ columns: Column<any>[]; data: any[] }, any] = React.useState({
		columns: [
			{ title: 'STT', field: 'order', type: 'numeric' },
			{ title: 'Mã gói', field: 'code', type: 'string' },
			{ title: 'Tên gói', field: 'surname', type: 'string' },
			{ title: 'Số lượng tin', field: 'number', type: 'numeric' },
			{ title: 'Phí', field: 'fees', type: 'numeric' },
			{ title: 'Chiết khấu', field: 'discount', type: 'numeric' },
			{ title: 'Thành tiền', field: 'money', type: 'numeric' },
			{
				title: 'Thời hạn sử dụng',
				field: 'date',
				type: 'string',
			},
		],
		data: [
			{ order: '1', code: 'MG_01', surname: 'Gói 5 Tin Đăng', number: 5, fees: 100, discount: 10, money: 200, date: '2 tháng' },
			{
				order: '2',
				code: 'MG_02',
				surname: 'Gói 50 Tin Đăng',
				number: 20,
				fees: 100,
				discount: 10,
				money: 200,
				birthCity: 34,
				date: '2 tháng',
			},
		],
	});

	return (
		<div className=''>
			<PacketNew />
			<MaterialTable
				title='Editable Example'
				columns={state.columns}
				data={state.data}
				editable={{
					onRowAdd: (newData) =>
						new Promise<void>((resolve) => {
							setTimeout(() => {
								const data = [...state.data];
								data.push(newData);
								setState({ ...state, data });
								resolve();
							}, 600);
						}),
					onRowUpdate: (newData, oldData) =>
						new Promise<void>((resolve) => {
							setTimeout(() => {
								const data = [...state.data];
								if (oldData) data[data.indexOf(oldData)] = newData;
								setState({ ...state, data });
								resolve();
							}, 600);
						}),
					onRowDelete: (oldData) =>
						new Promise<void>((resolve) => {
							setTimeout(() => {
								const data = [...state.data];
								data.splice(data.indexOf(oldData), 1);
								setState({ ...state, data });
								resolve();
							}, 600);
						}),
				}}
			/>
		</div>
	);
};
