import { AllTypeActions } from '../types';
import { AnyAction, Reducer } from 'redux';
import { GlobalReducer, IAppRequestState, initialRequestState } from './state';
import { indexOf } from 'lodash';

export interface IApplicationModal {}

export const GetUsersReducser: Reducer = (state: { data: any; loading: boolean; error: string } = { data: [], loading: false, error: '' }, action: AnyAction) => {
	switch (action.type) {
		case AllTypeActions.LOAD_USERS_LOADING: {
			return {
				...state,
				loading: true,
				error: '',
			};
		}
		case AllTypeActions.LOAD_USERS_SUCCESS: {
			return {
				...state,
				data: action.data,
				loading: false,
			};
		}
		case AllTypeActions.LOAD_USERS_ERROR: {
			return {
				...state,
				loading: false,
				error: action.error,
			};
		}
		case 'ADD_USER_SUCCESS': {
			console.log('add user success reducer', action);
			return { ...state, data: [...state.data, action.data] };
		}
		case 'DELETE_USER_SUCCESS': {
			const { removeIds } = action;
			return { ...state, data: state.data?.filter((u) => !removeIds.includes(u.id)) };
		}
		default: {
			return state;
		}
	}
};

export const AddUserReducer: Reducer = (state: IAppRequestState = initialRequestState, action: AnyAction) => {
	return GlobalReducer(state, action, AllTypeActions.ADD_USER.toString());
};

export const deleteUserReducer: Reducer = (state: IAppRequestState = initialRequestState, action: AnyAction) => {
	return GlobalReducer(state, action, AllTypeActions.ADD_USER.toString());
};
