import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './style.scss';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

export const Dashboard = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs>
					<Paper className='dashboard-item'>
						<span className='title'>Dịch vụ trả phí khác</span>
						<span className='number'>1000</span>
					</Paper>
				</Grid>
				<Grid item xs>
					<Paper className='dashboard-item'>
						<span className='title'>Cửa hàng</span>
						<span className='number'>1000</span>
					</Paper>
				</Grid>
				<Grid item xs>
					<Paper className='dashboard-item'>
						<span className='title'>Quảng cáo</span>
						<span className='number'>1000</span>
					</Paper>
				</Grid>
			</Grid>
			<Grid container spacing={3}>
				<Grid item xs>
					<Paper className='dashboard-item'>
						<span className='title'>Gói tin</span>
						<span className='number'>1000</span>
					</Paper>
				</Grid>
				<Grid item xs>
					<Paper className='dashboard-item'>
						<span className='title'>Gói nạp tiền</span>
						<span className='number'>1000</span>
					</Paper>
				</Grid>
				<Grid item xs>
					<Paper className='dashboard-item'>
						<span className='title'>Thành viên</span>
						<span className='number'>1000</span>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};
