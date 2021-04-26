import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

interface IProps {
	error?: boolean;
	type?: string;
	label?: string;
	onBlur?: () => void;
	onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	value?: string;
	isWhite?: boolean;
	autocomplete?: boolean;
}

const useStylesOutline = makeStyles((theme) => ({
	root: {
		'&:hover .MuiOutlinedInput-notchedOutline': {
			borderColor: '#FFF',
		},
	},
	notchedOutline: {
		borderColor: '#FFF',
	},
}));

const useStyles = makeStyles((theme) => ({
	root: {
		'&:hover .MuiOutlinedInput-notchedOutline': {
			borderColor: '#FFF',
		},
		'& input:valid + fieldset': {
			borderColor: '#FFF',
		},
		'& input:valid': {
			color: '#FFF',
		},
	},
}));

const inputLabelStyle = makeStyles((theme) => ({
	root: {
		color: '#FFF',
	},
}));

const useLabelStyle = makeStyles((theme) => ({
	labelColor: {
		color: '#FFF',
	},
}));

export function InputText(props: IProps) {
	const [showPasswd, setShowPasswd] = useState(false);
	const { type = 'text', label = '', error = false, autocomplete = false, onBlur = () => {}, onChange = () => {}, value = '', isWhite = false } = props;
	const classes = useStyles();
	const classesOutline = useStylesOutline();
	const labelClasses = useLabelStyle();
	const inputLabelClasses = inputLabelStyle();
	return (
		<div className='field-container'>
			<FormControl fullWidth variant='outlined'>
				{type === 'password' && <InputLabel className={isWhite ? labelClasses.labelColor : undefined}>{label}</InputLabel>}
				{type === 'password' ? (
					<OutlinedInput
						type={showPasswd ? 'text' : 'password'}
						label={label}
						error={error}
						value={value}
						onBlur={onBlur}
						onChange={onChange}
						classes={isWhite ? classesOutline : undefined}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton aria-label='toggle password visibility' onClick={() => setShowPasswd(!showPasswd)} edge='end'>
									{showPasswd ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						}
						inputProps={
							autocomplete
								? {
										autoComplete: 'new-password',
								  }
								: undefined
						}
					/>
				) : (
					<TextField
						type={type}
						label={label}
						error={error}
						value={value}
						onBlur={onBlur}
						onChange={onChange}
						classes={isWhite ? classes : undefined}
						variant='outlined'
						InputLabelProps={
							type === 'date'
								? {
										shrink: true,
										classes: isWhite ? inputLabelClasses : undefined,
								  }
								: {
										classes: isWhite ? inputLabelClasses : undefined,
								  }
						}
					/>
				)}
			</FormControl>
		</div>
	);
}
