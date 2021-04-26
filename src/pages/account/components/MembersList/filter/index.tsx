import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import 'rsuite/dist/styles/rsuite-default.css';
import { DateRangePicker } from 'rsuite';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
}));

export const Filter = () => {
	const classes = useStyles();
	const [age, setAge] = React.useState('');
	const handleChange = (event) => {
		setAge(event.target.value);
	};
	return (
			<div className=''>
				<div className='filter-top'>
					<div className='filter-item'>
						<input placeholder='Mã thành viên' className='form-input' />
					</div>
					<div className='filter-item'>
						<input placeholder='Dịch vụ cửa hàng' className='form-input' />
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
						<Button>Tìm kiếm</Button>
					</div>
				</div>
			</div>
	);
};
