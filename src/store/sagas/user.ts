import { AllTypeActions } from '../types';
import { put, takeLatest } from 'redux-saga/effects';
import { Requests } from '../requests';
import { AnyAction } from 'redux';
// import { ENDPOINTS, getApiUrl } from '../endpoints';
import { showMessage } from '../actions';

function* getUsers() {
	try {
		// const apiUrl = getApiUrl(ENDPOINTS.GET_USERS);
		const apiUrl = 'https://60517468534609001767198c.mockapi.io/api/user';
		const data: any = yield Requests.get(apiUrl);
		yield put({ type: AllTypeActions.LOAD_USERS_SUCCESS, data });
	} catch (e) {
		yield put({ type: AllTypeActions.LOAD_USERS_ERROR, error: e.message });
	}
}

function* addUser({ type, input }: AnyAction) {
	yield put({ type: `${type}_ATTEMPT` });
	try {
		// const apiUrl = getApiUrl(ENDPOINTS.CREATE_ADMIN_ACCOUNT);
		const apiUrl = 'https://60517468534609001767198c.mockapi.io/api/user';
		const data: any = yield Requests.post(apiUrl, input);
		// console.log('saga res', data);
		yield put({ type: `${type}_SUCCESS`, data: input });
		yield put(showMessage('Add user successful!'));
	} catch (e) {
		yield put({ type: `${type}_FAIL`, error: e.toString() });
	}
}

function* deleteUser({ type, input }: AnyAction) {
	yield put({ type: `${type}_ATTEMPT` });
	try {
		// const apiUrl = getApiUrl(ENDPOINTS.CREATE_ADMIN_ACCOUNT);
		const apiUrl = 'https://60517468534609001767198c.mockapi.io/api/user';
		const data: any = yield Requests.get(apiUrl, input);
		console.log('saga res', data);
		yield put({ type: `${type}_SUCCESS`, removeIds: input });
		yield put(showMessage('Delete user successful!'));
	} catch (e) {
		yield put({ type: `${type}_FAIL`, error: e.toString() });
	}
}

export function* userActions() {
	yield takeLatest(AllTypeActions.LOAD_USERS_LOADING, getUsers);
	yield takeLatest(AllTypeActions.ADD_USER, addUser);
	yield takeLatest(AllTypeActions.DELETE_USER, deleteUser);
}
