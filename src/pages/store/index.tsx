import React from 'react';
import Button from '@material-ui/core/Button';
import { Sidebar } from '../../components';
import { MenuPopupState } from '../../components/Account/AccountButton';
import { SubscriptionList } from './SubscriptionList';
import '../../pages/reset.scss';
import { PacketListStore } from './PacketList';
import { useState } from 'react';

export const Store = () => {
	const [activeTab, setActiveTab] = useState('SubscriptionList');
	const handleActiveTab = (tab: string) => {
		setActiveTab(tab);
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
				<div className='tab__wrapper'>
					<div className='Breadcrumb'>
						<span>Cửa hàng</span>
					</div>
				</div>
				<div className='Account tab__wrapper'>
					<div className='Account__title tab___content'>
						<Button
							variant='outlined'
							onClick={() => {
								handleActiveTab('SubscriptionList');
							}}
							className={activeTab === 'SubscriptionList' ? 'active' : ''}
						>
							Danh Sách Đăng Ký
						</Button>
						<Button
							variant='outlined'
							onClick={() => {
								handleActiveTab('PacketListStore');
							}}
							className={activeTab === 'PacketListStore' ? 'active' : ''}
						>
							Danh Sách Gói
						</Button>
					</div>
					<div className='Account__content'>{activeTab === 'SubscriptionList' ? <SubscriptionList /> : <PacketListStore />}</div>
				</div>
			</div>
		</div>
	);
};
