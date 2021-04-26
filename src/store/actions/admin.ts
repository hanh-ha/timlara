import { AllTypeActions } from '../types';
import { SigninInput, AlertSeverity } from '../reducers';

export const postLogin = (input: SigninInput): any => {
	return {
		type: AllTypeActions.POST_LOGIN,
		input,
	};
};

export const getCurrentAdmin = (): any => {
	return {
		type: AllTypeActions.GET_CURRENT_ADMIN,
	};
};

export const getAdminRoles = (offset: number, limit: number): any => {
	return {
		type: AllTypeActions.GET_ADMIN_ROLES,
		limit,
		offset,
	};
};

export const getAdminRole = (id: string): any => {
	return {
		type: AllTypeActions.GET_ADMIN_ROLE,
		id,
	};
};

export const createAdminRole = (input: any): any => {
	return {
		type: AllTypeActions.CREATE_ADMIN_ROLE,
		input,
	};
};

export const updateAdminRole = (id: string, input: any): any => {
	return {
		type: AllTypeActions.UPDATE_ADMIN_ROLE,
		input,
		id,
	};
};

export const getAdminAccounts = (offset: number, limit: number): any => {
	return {
		type: AllTypeActions.GET_ADMIN_ACCOUNTS,
		limit,
		offset,
	};
};

export const getAdminAccount = (id: string): any => {
	return {
		type: AllTypeActions.GET_ADMIN_ACCOUNT,
		id,
	};
};

export const createAdminAccount = (input: any): any => {
	return {
		type: AllTypeActions.CREATE_ADMIN_ACCOUNT,
		input,
	};
};

export const updateAdminAccount = (id: string, input: any): any => {
	return {
		type: AllTypeActions.UPDATE_ADMIN_ACCOUNT,
		input,
		id,
	};
};

export const setSearch = (text: string): any => {
	return {
		type: AllTypeActions.GLOBAL_SEARCH,
		text,
	};
};

export const showMessage = (message: string, severity?: AlertSeverity): any => {
	return {
		type: AllTypeActions.SYSTEM_MESSAGE_SHOW,
		message,
		severity,
	};
};

export const hideMessage = (): any => {
	return {
		type: AllTypeActions.SYSTEM_MESSAGE_HIDE,
	};
};
