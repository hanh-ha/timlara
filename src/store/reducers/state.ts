import { AnyAction } from 'redux';

export interface IAppRequestState {
	isFetching: boolean;
	data: any;
	error: string;
	total?: number;
}

export const initialRequestState: IAppRequestState = {
	isFetching: false,
	data: null,
	error: '',
	total: 1,
};

export interface SigninInput {
	username: string;
	password: string;
}

export interface InspirationInput {
	name: string;
	sentence: string;
	enable: boolean;
	woman: boolean;
	man: boolean;
}

export type AlertSeverity = 'success' | 'info' | 'warning' | 'error' | undefined;

export interface IApplicationState {
	signin: IAppRequestState;
	currentUser: IAppRequestState;
	permission: { allPermissions: any };
	search: { text: string };
	adminAccounts: IAppRequestState;
	adminDetail: IAppRequestState;
	adminUpdate: IAppRequestState;
	adminCreate: IAppRequestState;
	adminRoles: IAppRequestState;
	adminRole: IAppRequestState;
	adminRoleUpdate: IAppRequestState;
	adminRoleCreate: IAppRequestState;
	systemMessage: { message: string; isOpen: boolean; severity: AlertSeverity };
	getUsers: IAppRequestState;
	addUser: IAppRequestState;
	filterProduct: IAppRequestState;
}

export const GlobalReducer = (state: IAppRequestState, action: AnyAction, actionType: string): IAppRequestState => {
	switch (action.type) {
		case `${actionType}_ATTEMPT`: {
			return {
				...state,
				isFetching: true,
				error: '',
				data: null,
			};
		}
		case `${actionType}_SUCCESS`: {
			return {
				...state,
				data: action.data,
				isFetching: false,
				error: '',
				total: action.total ? action.total : state.total,
			};
		}
		case `${actionType}_FAIL`: {
			return {
				...state,
				error: action.error,
				isFetching: false,
				data: null,
			};
		}
		default:
			return state;
	}
};
