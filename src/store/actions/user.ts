import { AllTypeActions } from '../types/index';

export const getUsers = () => {
	return {
		type: AllTypeActions.LOAD_USERS_LOADING,
	};
};

export const addUser = (input: any) => {
	return {
		type: AllTypeActions.ADD_USER,
		input,
	};
};

export const deleteUser = (input: string[]) => {
	return {
		type: AllTypeActions.DELETE_USER,
		input,
	};
};
