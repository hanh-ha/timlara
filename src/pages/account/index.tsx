import React from 'react';
import Button from '@material-ui/core/Button';
import { Sidebar } from '../../components';
import { MenuPopupState } from '../../components/Account/AccountButton';
import './style.scss';
import { MembersList } from './components/MembersList';
import { UserList } from './components/UserList';
import { Decentralization } from './components/Decentralization';
import { useState } from 'react';

export const Account = () => {
	const [activeTab, setActiveTab] = useState('MembersList');
	const handleActiveTab = (tab: string) => {
		setActiveTab(tab);
	};
	const renderSwitch = (activeTab) => {
		switch (activeTab) {
			case 'MembersList':
				return <MembersList />;
			case 'UserList':
				return <UserList />;
			case 'Decentralization':
				return <Decentralization />;
		}
	};

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
				<div className='Account'>
					<div className='Account__title'>
						<Button
							variant='outlined'
							onClick={() => {
								handleActiveTab('MembersList');
							}}
							className={activeTab === 'MembersList' ? 'active' : ''}
						>
							Danh Sách Thành Viên
						</Button>
						<Button
							variant='outlined'
							onClick={() => {
								handleActiveTab('UserList');
							}}
							className={activeTab === 'UserList' ? 'active' : ''}
						>
							Danh Sách Users
						</Button>
						<Button
							variant='outlined'
							onClick={() => {
								handleActiveTab('Decentralization');
							}}
							className={activeTab === 'Decentralization' ? 'active' : ''}
						>
							Phân Quyền
						</Button>
					</div>
					<div className='Account__content'>{renderSwitch(activeTab)}</div>
				</div>
			</div>
		</div>
	);
};
