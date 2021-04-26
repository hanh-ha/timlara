import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import './style.scss';

export const MenuPopupState = () => {
	return (
		<PopupState variant='popover' popupId='demo-popup-menu'>
			{(popupState) => (
				<React.Fragment>
					<Button variant='contained' color='primary' {...bindTrigger(popupState)}>
						<span>
							<AccountCircleIcon />
						</span>
						<span>hanh</span>
					</Button>
					<Menu {...bindMenu(popupState)}>
						<MenuItem onClick={popupState.close}>
							<span>hanh</span>
							<span>hanhdepgaibkhn@gmail.com</span>
						</MenuItem>
						<MenuItem onClick={popupState.close}>
							<span>
								<PermIdentityIcon />
							</span>
							<Link to='/account-information'>Tài khoản</Link>
						</MenuItem>
						<MenuItem onClick={popupState.close}>
							<span>
								<ExitToAppIcon />
							</span>
							<span>Đăng nhập tài khoản khác</span>
						</MenuItem>
						<MenuItem onClick={popupState.close}>
							<span>Đăng xuất</span>
						</MenuItem>
					</Menu>
				</React.Fragment>
			)}
		</PopupState>
	);
};
