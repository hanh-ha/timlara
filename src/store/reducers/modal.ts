import { AllTypeActions } from '../types';
import { AnyAction, Reducer } from 'redux';

export interface IApplicationModal {}

export const GetModalUserReducser: Reducer = (
	state: { showModal: boolean; hideModal: boolean; component: any } = { showModal: true, hideModal: false, component: null },
	action: AnyAction,
) => {
	switch (action.type) {
		case AllTypeActions.SHOW_MODAl: {
			return {
				...state,
				showModal: true,
			};
		}
		case AllTypeActions.HIDE_MODAL: {
			return {
				...state,
				data: action.data,
				loading: false,
				hideModal: false,
			};
		}
		case AllTypeActions.CHANGE_MODAL_CONTENT: {
			return {
				...state,
				component: action.component,
			};
		}
		default: {
			return state;
		}
	}
};
