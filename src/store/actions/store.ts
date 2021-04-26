import { AllTypeActions } from '../types/index';

export const filterProduct = () => {
	return {
		type: AllTypeActions.GET_FILTER_PRODUCT,
	};
};

export const postfilterProduct = (input: any) => {
	return {
		type: AllTypeActions.POST_FILTER_PRODUCT,
		input,
	};
};
