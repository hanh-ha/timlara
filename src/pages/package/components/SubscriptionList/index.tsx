import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { RegistrationFilter } from '../RegistrationFilter';
import Button from '@material-ui/core/Button';

const useRowStyles = makeStyles({
	root: {
		'& > *': {
			borderBottom: 'unset',
		},
	},
});

const createData = (id, code, name, initCount, currentCount, dateBuy, endDate, history) => {
	return {
		id,
		code,
		name,
		initCount,
		currentCount,
		dateBuy,
		endDate,
		history,
	};
};

const rows = [
	createData(1, 'TV01', 'ha minh hanh', 24, 4.0, '6/8/2020', '6/2/2021', [
		{ order: 1, code: 'MT_01', img: 'link', title: 'Đồng hồ đeo tay thông minh...', customerId: '11091700', date: '2020-01-05', amount: 'Đã duyệt' },
		{ order: 2, code: 'MT_03', img: 'link', title: 'Đồng hồ đeo tay thông minh...', customerId: 'Anonymous', date: '2020-01-02', amount: 'Chưa duyệt' },
	]),
	createData(2, 'TV01', 'ha minh hanh', 37, 4.3, '6/8/2020', '6/2/2021', [
		{ order: 1, code: 'MT_01', img: 'link', title: 'Đồng hồ đeo tay thông minh...', customerId: '11091700', date: '2020-01-05', amount: 'Đã duyệt' },
		{ order: 2, code: 'MT_04', img: 'link', title: 'Đồng hồ đeo tay thông minh...', customerId: 'Anonymous', date: '2020-01-02', amount: 'Chưa duyệt' },
	]),
	createData(3, 'TV01', 'ha minh hanh', 24, 6.0, '6/8/2020', '6/2/2021', [
		{ order: 1, code: 'MT_01', img: 'link', title: 'Đồng hồ đeo tay thông minh...', customerId: '11091700', date: '2020-01-05', amount: 'Đã duyệt' },
		{ order: 2, code: 'MT_05', img: 'link', title: 'Đồng hồ đeo tay thông minh...', customerId: 'Anonymous', date: '2020-01-02', amount: 'Chưa duyệt' },
	]),
	createData(4, 'TV01', 'ha minh hanh', 67, 4.3, '6/8/2020', '6/2/2021', [
		{ order: 1, code: 'MT_01', img: 'link', title: 'Đồng hồ đeo tay thông minh...', customerId: '11091700', date: '2020-01-05', amount: 'Đã duyệt' },
		{ order: 2, code: 'MT_06', img: 'link', title: 'Đồng hồ đeo tay thông minh...', customerId: 'Anonymous', date: '2020-01-02', amount: 'Chưa duyệt' },
	]),
	createData(5, 'TV01', 'ha minh hanh', 49, 3.9, '6/8/2020', '6/2/2021', [
		{ order: 1, code: 'MT_01', img: 'link', title: 'Đồng hồ đeo tay thông minh...', customerId: '11091700', date: '2020-01-05', amount: 'Đã duyệt' },
		{ order: 2, code: 'MT_07', img: 'link', title: 'Đồng hồ đeo tay thông minh...', customerId: 'Anonymous', date: '2020-01-02', amount: 'Chưa duyệt' },
	]),
];

const Row = (props: IRow) => {
	const { row } = props;
	const [open, setOpen] = React.useState(false);

	return (
		<React.Fragment>
			<TableRow className='table-old'>
				<TableCell align='right'>{row.id}</TableCell>
				<TableCell align='right'>{row.code}</TableCell>
				<TableCell align='right'>{row.name}</TableCell>
				<TableCell align='right'>{row.initCount}</TableCell>
				<TableCell align='right'>{row.currentCount}</TableCell>
				<TableCell align='right'>{row.dateBuy}</TableCell>
				<TableCell align='right'>{row.endDate}</TableCell>
				<TableCell>
					<IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
						{open ? <VisibilityIcon /> : <VisibilityOffIcon />}
					</IconButton>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<Box margin={1}>
							<Typography variant='h6' gutterBottom component='div'>
								Danh sách tin đăng theo gói
							</Typography>
							<Table size='small' aria-label='purchases'>
								<TableHead>
									<TableRow>
										<TableCell>Số thứ tự</TableCell>
										<TableCell>Mã tin</TableCell>
										<TableCell align='right'>Hình ảnh</TableCell>
										<TableCell>Tiêu đề tin đăng</TableCell>
										<TableCell>Danh mục</TableCell>
										<TableCell>Ngày tạo</TableCell>
										<TableCell align='right'>Tình trạng duyệt</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{row.history.map((historyRow) => (
										<TableRow key={historyRow.date}>
											<TableCell component='th' scope='row'>
												{historyRow.order}
											</TableCell>
											<TableCell>{historyRow.code}</TableCell>
											<TableCell align='right'>{historyRow.img}</TableCell>
											<TableCell align='right'>{historyRow.title}</TableCell>
											<TableCell align='right'>{historyRow.customerId}</TableCell>
											<TableCell align='right'>{historyRow.date}</TableCell>
											<TableCell align='right'>{historyRow.amount}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
};

interface IRow {
	row: {
		id: number;
		code: number;
		name: string;
		history: { amount: string; customerId: string; date: string; order: number; code: string; img: string; title: string }[];
		initCount: number;
		currentCount: number;
		dateBuy: number;
		endDate: string;
	};
}

export const SubscriptionList = (props) => {
	return (
		<div>
			<div className='package__button'>
				<div className='package__RegistrationList'>
					<div className='RegistrationList__left'>
						<RegistrationFilter />
					</div>
					<div className='Registration-Button'>
						<Button variant='outlined'>Tạo gói tin</Button>
					</div>
				</div>
			</div>
			<div className='Package-Table'>
				<TableContainer component={Paper}>
					<Table aria-label='collapsible table'>
						<TableHead>
							<TableRow>
								<TableCell>STT</TableCell>
								<TableCell align='right'>Mã thành viên</TableCell>
								<TableCell align='right'>Tên thành viên</TableCell>
								<TableCell align='right'>Số lượng ban đầu</TableCell>
								<TableCell align='right'>Số lượng tin còn lại</TableCell>
								<TableCell align='right'>Thời gian mua</TableCell>
								<TableCell align='right'>Hạn sử dụng</TableCell>
								<TableCell />
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<Row key={row.name} row={row} />
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
};
