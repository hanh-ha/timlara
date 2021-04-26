import React from 'react';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles.scss';

export const Instance = () => {
	return (
		<div className='dates '>
			<DateRangePicker appearance='default' placeholder='Default' style={{ width: 280 }} />
		</div>
	);
};
