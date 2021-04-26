import React from 'react';
import { Filter } from './filter';
import '../../../../pages/reset.scss';
import { MemberstableList } from './MemberstableList';
import './style.scss';

export const MembersList = () => {
	return (
		<div className='MembersList'>
			<div className='filter'>
				<Filter />
			</div>
			<div className='tableList'>
				<MemberstableList />
			</div>
		</div>
	);
};
