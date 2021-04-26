import React from 'react';
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export const ChartLine = () => {
	const data = [
		{
			name: '17/2',
			'Gói tháng 1': 3432,
			'Gói tháng 2': 2342,
		},
		{
			name: '18/2',
			'Gói tháng 1': 2342,
			'Gói tháng 2': 3246,
		},
		{
			name: '19/2',
			'Gói tháng 1': 4565,
			'Gói tháng 2': 4556,
		},
		{
			name: '20/2',
			'Gói tháng 1': 6654,
			'Gói tháng 2': 4465,
		},
		{
			name: '21/2',
			'Gói tháng 1': 8765,
			'Gói tháng 2': 4553,
		},
	];

	return (
		<LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
			<CartesianGrid strokeDasharray='3 3' />
			<XAxis dataKey='name' />
			<YAxis />
			<Tooltip />
			<Legend />
			<Line type='monotone' dataKey='Gói tháng 1' stroke='#0095FF' />
			<Line type='monotone' dataKey='Gói tháng 2' stroke='#FF0000' />
		</LineChart>
	);
};
