import { AllTypeActions } from '../types/index';

export const showModal = () => {
	return {
		type: AllTypeActions.SHOW_MODAl,
	};
};

export const HIDE_MODAL = () => {
	return {
		type: AllTypeActions.HIDE_MODAL,
	};
};

export const CHANGE_MODAL_CONTENT = (component) => {
	return {
		type: AllTypeActions.CHANGE_MODAL_CONTENT,
		component,
	};
};
