import React from 'react';
import Button from '@material-ui/core/Button';
import { Sidebar } from '../../components';
import { MenuPopupState } from '../../components/Account/AccountButton';
import '../../pages/reset.scss';
import { useState } from 'react';
import { CampaignList } from './CampaignList';
import { Advertisementlist } from './Advertisementlist';

export const Advertisement = () => {
	const [activeTab, setActiveTab] = useState('AdvertisementList');
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
				<div className='Account tab__wrapper'>
					<div className='Account__title tab___content'>
						<Button
							variant='outlined'
							onClick={() => {
								handleActiveTab('CampaignList');
							}}
							className={activeTab === 'CampaignList' ? 'active' : ''}
						>
							Danh Sách Đăng Ký
						</Button>
						<Button
							variant='outlined'
							onClick={() => {
								handleActiveTab('Advertisementlist');
							}}
							className={activeTab === 'Advertisementlist' ? 'active' : ''}
						>
							Danh Sách Quảng Cáo
						</Button>
					</div>
					<div className='Account__content'>{activeTab === 'CampaignList' ? <CampaignList /> : <Advertisementlist />}</div>
				</div>
			</div>
		</div>
	);
};
