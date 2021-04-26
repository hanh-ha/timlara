import { Sidebar } from '../../components';
import { Dashboard } from '../../components';
import { FilterTime } from './components/FilterTime/index';
import { ChartBar } from './components/ChartBar/index';
import { ChartLine } from './components/ChartLine/index';
import { MenuPopupState } from '../../components/Account/AccountButton';

export const Overview = () => {
	return (
		<div className='page-wrapper'>
			<div className='page-left'>
				<div className='page_sidebar'>
					<Sidebar />
				</div>
			</div>
			<div className='page-right'>
				<div className='page_menu'>
					<MenuPopupState />
				</div>
				<div className='Dashboard'>
					<h1>Tổng quan</h1>
					<Dashboard />
				</div>
				<div className='chart'>
					<div className='filter_t'>
						<FilterTime />
					</div>
				</div>
				<div className='chart'>
					<div className='chart_column'>
						<ChartBar />
					</div>
				</div>
				<div className='chart'>
					<div className='chart_line'>
						<ChartLine />
					</div>
				</div>
			</div>
		</div>
	);
};
