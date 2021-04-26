import { AnyAction, Reducer } from 'redux';
import { IAppRequestState, initialRequestState, GlobalReducer, AlertSeverity } from './state';
import { AllTypeActions } from '../types';

export const PostLoginReducer: Reducer = (state: IAppRequestState = initialRequestState, action: AnyAction) => {
	return GlobalReducer(state, action, AllTypeActions.POST_LOGIN.toString());
};

export const GetCurrentUserReducer: Reducer = (state: IAppRequestState = initialRequestState, action: AnyAction) => {
	return GlobalReducer(state, action, AllTypeActions.GET_CURRENT_ADMIN.toString());
};

export const GetAdminAccounts: Reducer = (state: IAppRequestState = initialRequestState, action: AnyAction) => {
	return GlobalReducer(state, action, AllTypeActions.GET_ADMIN_ACCOUNTS.toString());
};

export const GetAdminDetail: Reducer = (state: IAppRequestState = initialRequestState, action: AnyAction) => {
	return GlobalReducer(state, action, AllTypeActions.GET_ADMIN_ACCOUNT.toString());
};

export const CreateAdminAccount: Reducer = (state: IAppRequestState = initialRequestState, action: AnyAction) => {
	return GlobalReducer(state, action, AllTypeActions.CREATE_ADMIN_ACCOUNT.toString());
};

export const UpdateAdminAccount: Reducer = (state: IAppRequestState = initialRequestState, action: AnyAction) => {
	return GlobalReducer(state, action, AllTypeActions.UPDATE_ADMIN_ACCOUNT.toString());
};

export const GetAdminRoles: Reducer = (state: IAppRequestState = initialRequestState, action: AnyAction) => {
	return GlobalReducer(state, action, AllTypeActions.GET_ADMIN_ROLES.toString());
};

export const GetAdminRole: Reducer = (state: IAppRequestState = initialRequestState, action: AnyAction) => {
	return GlobalReducer(state, action, AllTypeActions.GET_ADMIN_ROLE.toString());
};

export const CreateAdminRole: Reducer = (state: IAppRequestState = initialRequestState, action: AnyAction) => {
	return GlobalReducer(state, action, AllTypeActions.CREATE_ADMIN_ROLE.toString());
};

export const UpdateAdminRole: Reducer = (state: IAppRequestState = initialRequestState, action: AnyAction) => {
	return GlobalReducer(state, action, AllTypeActions.UPDATE_ADMIN_ROLE.toString());
};

export const AllPermissionsReducer: Reducer = (state: { allPermissions: any } = { allPermissions: null }, action: AnyAction) => {
	switch (action.type) {
		case 'LOAD_ALL_PERMISSION': {
			return {
				...state,
				allPermissions: action.data,
			};
		}
		default:
			return state;
	}
};

export const GlobalSearchReducer: Reducer = (state: { text: string } = { text: '' }, action: AnyAction) => {
	switch (action.type) {
		case AllTypeActions.GLOBAL_SEARCH: {
			return {
				...state,
				text: action.text,
			};
		}
		default:
			return state;
	}
};

export const SystemMessageReducer: Reducer = (
	state: { message: string; isOpen: boolean; severity: AlertSeverity } = { message: '', isOpen: false, severity: 'success' },
	action: AnyAction,
) => {
	if (action.type.indexOf('_FAIL') !== -1) {
		return {
			...state,
			message: action.error,
			severity: 'error',
			isOpen: true,
		};
	}
	switch (action.type) {
		case AllTypeActions.SYSTEM_MESSAGE_SHOW: {
			return {
				...state,
				message: action.message,
				severity: action.severity ? action.severity : 'success',
				isOpen: true,
			};
		}
		case AllTypeActions.SYSTEM_MESSAGE_HIDE: {
			return {
				...state,
				message: '',
				isOpen: false,
			};
		}
		default:
			return state;
	}
};
