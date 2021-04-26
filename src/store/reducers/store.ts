import { AnyAction, Reducer } from 'redux';
import { IAppRequestState, initialRequestState, GlobalReducer } from './state';
import { AllTypeActions } from '../types';

// export const FilterProductReducer: Reducer = (state: IAppRequestState = initialRequestState, action: AnyAction) => {
// 	return GlobalReducer(state, action, AllTypeActions.FILTER_PRODUCT.toString());
// };
export interface IApplicationModal {}
export const FilterProductReducser: Reducer = (state: { data: any; loading: boolean; error: string } = { data: [], loading: false, error: '' }, action: AnyAction) => {
	switch (action.type) {
		case AllTypeActions.GET_FILTER_PRODUCT: {
			return {
				...state,
				loading: true,
				error: '',
			};
		}
		case 'GET_FILTER_PRODUCT_SUCCESS': {
			return {
				...state,
				data: action.data,
				loading: false,
			};
		}
		case 'GET_FILTER_PRODUCT_ERROR': {
			return {
				...state,
				loading: false,
				error: action.error,
			};
		}
		case 'POST_FILTER_PRODUCT_SUCCESS': {
			console.log('add user success reducer', action);
			return { ...state, data: [...state.data, ...action.data] };
		}
		default: {
			return state;
		}
	}
};
export const postFilterProductReducser: Reducer = (state: IAppRequestState = initialRequestState, action: AnyAction) => {
	return GlobalReducer(state, action, AllTypeActions.POST_FILTER_PRODUCT.toString());
};
