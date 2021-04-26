import React from 'react';
import { Sidebar } from '../../../components';
import { MenuPopupState } from '../../../components/Account/AccountButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchIcon from '@material-ui/icons/Search';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export const ContentPage = () => {
	function createData(name, dateBuy, history) {
		return {
			name,
			dateBuy,
			history,
		};
	}

	const rows = [
		createData('Giới thiệu', '6/2/2021', [
			{ title: 'Đồng hồ đeo tay thông minh...', date: '2020-01-05' },
			{ title: 'Đồng hồ đeo tay thông minh...', date: '2020-01-02' },
		]),
		createData('Quy chế hoạt động', '6/2/2021', [
			{ title: 'Đồng hồ đeo tay thông minh...', date: '2020-01-05' },
			{ title: 'Đồng hồ đeo tay thông minh...', date: '2020-01-02' },
		]),
		createData('Điều khoản', ' 6/2/2021', [
			{ title: 'Điều khoản dịch vụ', date: '2020-01-05' },
			{ title: 'Điều khoản bán hàng', date: '2020-01-02' },
		]),
	];
	function Row(props: IRow) {
		const { row } = props;
		const [open, setOpen] = React.useState(false);

		return (
			<React.Fragment>
				<TableRow>
					<TableCell align='right'>{row.name}</TableCell>
					<TableCell align='right'>{row.dateBuy}</TableCell>
					<TableCell align='right'>
						<EditIcon />
						<DeleteIcon />
					</TableCell>
					<TableCell>
						<IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
							{open ? <ExpandMoreIcon /> : <ExpandMoreIcon />}
						</IconButton>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
						<Collapse in={open} timeout='auto' unmountOnExit>
							<Box margin={1}>
								<Table size='small' aria-label='purchases' className='sub-table'>
									<TableHead></TableHead>
									<TableBody>
										{row.history.map((historyRow) => (
											<TableRow key={historyRow.date}>
												<TableCell align='right'>{historyRow.title}</TableCell>
												<TableCell align='right'>{historyRow.date}</TableCell>
												<TableCell align='right'>
													<EditIcon />
													<DeleteIcon />
												</TableCell>
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
	}

	interface IRow {
		row: {
			name: string;
			history: { amount: string; customerId: string; date: string; order: number; code: string; img: string; title: string }[];
			dateBuy: number;
		};
	}

	return (
		<div className='page-wrapper '>
			<div className='page-left'>
				<div className='page_sidebar'>
					<Sidebar />
				</div>
			</div>
			<div className='page-right'>
				<div className='page_menu'>
					<MenuPopupState />
				</div>
				<div className='tab__wrapper contentPage'>
					<div className='Breadcrumb'>
						<span>
							<span>Cấu Hình</span>
							<ArrowForwardIosIcon />
							<strong>Trang Nội Dung</strong>
						</span>
					</div>
					<div className='Account tab__wrapper'>
						<div className='Account__title tab___content'>
							<Button variant='outlined'>Danh Sách Trang Nội Dung</Button>
						</div>
					</div>
					<div className='contentPage-content'>
						<Link to='/configuration-management/configuration/new-contentpage'>
							<button className='button_add'>Thêm trang nội dung</button>
						</Link>
						<div className='TableList table-wrapper '>
							<div className='contentPage-search'>
								<input type='text' className='form-input' placeholder='Tìm kiếm trang nội dung' />
								<SearchIcon />
							</div>
							<div className='contentPage-table'>
								<TableContainer component={Paper}>
									<Table aria-label='collapsible table'>
										<TableHead>
											<TableRow>
												<TableCell align='right'>Tiêu đề</TableCell>
												<TableCell align='right'>Ngày cập nhật</TableCell>
												<TableCell align='right'>Thao tác</TableCell>
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
					</div>
				</div>
			</div>
		</div>
	);
};
