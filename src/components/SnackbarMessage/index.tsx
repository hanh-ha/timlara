import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { IApplicationState, hideMessage } from '../../store';

export const SnackbarMessage = () => {
	const { isOpen, message, severity } = useSelector((state: IApplicationState) => state.systemMessage);
	const dispatch = useDispatch();
	return (
		<Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={!!(isOpen && message)} autoHideDuration={5000} onClose={() => dispatch(hideMessage())}>
			<MuiAlert elevation={6} variant='filled' onClose={() => dispatch(hideMessage())} severity={severity}>
				{message}
			</MuiAlert>
		</Snackbar>
	);
};
