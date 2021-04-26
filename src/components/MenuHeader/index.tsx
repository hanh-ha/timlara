import React from 'react';
import './style.scss';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const MenuHeader = () => {
	return (
		<div className='menu_header'>
			<div className='menu_header__close'>
                <span>
                    <CloseIcon />
                </span>
            </div>
            <div className="menu_header__usericon">
                <span>
                    <AccountCircleIcon />
                </span>
                <span>
                    hanh
                </span>
            </div>
		</div>
	);
};