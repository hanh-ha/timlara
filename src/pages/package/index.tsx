import { useState } from 'react';
import Button from '@material-ui/core/Button';
import './styles.scss';
import { Sidebar } from '../../components';
import { MenuPopupState } from '../../components/Account/AccountButton';
import { SubscriptionList } from './components/SubscriptionList';
import { MaterialTableDemo } from './components/PacketList';

export const PackagePage = () => {
	const [activeTab, setActiveTab] = useState('subscription');
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
						<span>Gói tin</span>
					</div>
				</div>
				<div className='package'>
					<div className='package__filter'>
						<div className=''>
							<div className='package__filterTitle'>
								<div className='package__title--Registrationlist'>
									<Button
										variant='outlined'
										onClick={() => {
											handleActiveTab('subscription');
										}}
										className={activeTab === 'subscription' ? 'active' : ''}
									>
										Danh sách đăng ký
									</Button>
								</div>
								<div className='package__title--PacketList'>
									<Button
										variant='outlined'
										onClick={() => {
											handleActiveTab('package');
										}}
										className={activeTab === 'package' ? 'active' : ''}
									>
										Danh sách gói tin
									</Button>
								</div>
							</div>
						</div>
						<div className='package__filterContent'>
							{activeTab === 'subscription' ? (
								<div className='package__filterContent--PacketList'>
									<SubscriptionList />
								</div>
							) : (
								<div className='package__filterContent--RegistrationList'>
									<MaterialTableDemo />
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
