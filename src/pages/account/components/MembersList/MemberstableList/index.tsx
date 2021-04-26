import React from 'react';
import { MembersTitle } from '../MemberstableList/MembersTitle';
import { EnhancedTable } from './MembersListContent';

export const MemberstableList = () => {
	return (
		<div className='TableList table-wrapper'>
			<div className='TableList__button'>
				<MembersTitle />
			</div>
			<div className='TableList__content'>
				<EnhancedTable />
			</div>
		</div>
	);
};
