import React from 'react';
import Button from '@material-ui/core/Button';

export const MembersTitle = () => {
	return (
		<div>
			<Button className='button_blue' variant='outlined'>
				Kích hoạt tài khoản
			</Button>
			<Button className='button_blue' variant='outlined'>
				Xóa tài khoản
			</Button>
			<Button className='button_blue' variant='outlined'>
				Khóa tài khoản
			</Button>
		</div>
	);
};
