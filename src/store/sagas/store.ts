import { AllTypeActions } from '../types';
import { put, takeLatest } from 'redux-saga/effects';
import { Requests } from '../requests';
import { AnyAction } from 'redux';
// import { ENDPOINTS, getApiUrl } from '../endpoints';
import { showMessage } from '../actions';

function* getFilterProduct({ type }) {
	try {
		const apiUrl = 'https://60517468534609001767198c.mockapi.io/api/filterProduct';
		const data: any = yield Requests.get(apiUrl);
		yield put({ type: `${type}_SUCCESS`, data });
	} catch (e) {
		yield put({ type: `${type}_FAIL`, error: e.message });
	}
}

function* postfilterProduct({ type, input }: AnyAction) {
	yield put({ type: `${type}_ATTEMPT` });
	try {
		// const apiUrl = getApiUrl(ENDPOINTS.CREATE_ADMIN_ACCOUNT);
		const apiUrl = 'https://60517468534609001767198c.mockapi.io/api/filterProduct';
		const data: any = yield Requests.post(apiUrl, input);
		yield put({ type: `${type}_SUCCESS`, data: input });
		yield put(showMessage('Add user successful!'));
	} catch (e) {
		yield put({ type: `${type}_FAIL`, error: e.toString() });
	}
}

export function* storeActions() {
	yield takeLatest(AllTypeActions.GET_FILTER_PRODUCT, getFilterProduct);
	yield takeLatest(AllTypeActions.POST_FILTER_PRODUCT, postfilterProduct);
}
