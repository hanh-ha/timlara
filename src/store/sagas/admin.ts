import { AllTypeActions } from '../types';
import { put, takeLatest } from 'redux-saga/effects';
import { Requests } from '../requests';

import { AnyAction } from 'redux';
import { getApiUrl, ENDPOINTS } from '../endpoints';
import { showMessage } from '../actions';

function* postLogin({ input, type }: AnyAction) {
	yield put({ type: `${type}_ATTEMPT` });
	try {
		const apiUrl = getApiUrl(ENDPOINTS.POST_LOGIN);
		const data: any = yield Requests.post(apiUrl, input, false);
		if (data && data.success) {
			localStorage.setItem('backoffice_token', data.token);
			yield put({ type: `${type}_SUCCESS`, data });
		} else {
			yield put({ type: `${type}_FAIL`, error: data.message });
		}
	} catch (e) {
		yield put({ type: `${type}_FAIL`, error: e.toString() });
	}
}

function* getCurrentAdmin({ type }: AnyAction) {
	yield put({ type: `${type}_ATTEMPT` });
	try {
		const apiUrl = getApiUrl(ENDPOINTS.GET_CURRENT_ADMIN);
		const data: any = yield Requests.get(apiUrl);
		if (data && data.success) {
			yield put({ type: `${type}_SUCCESS`, data: data.data });
			yield put({ type: `LOAD_ALL_PERMISSION`, data: data.all_permissions });
		} else {
			yield put({ type: `${type}_FAIL`, error: data.message });
			// force logout
			// localStorage.removeItem('backoffice_token');
			// window.location.href = '/';
		}
	} catch (e) {
		yield put({ type: `${type}_FAIL`, error: e.toString() });
		// force logout
		// localStorage.removeItem('backoffice_token');
		// window.location.href = '/';
	}
}

function* updateAdminAccount({ id, input, type }: AnyAction) {
	yield put({ type: `${type}_ATTEMPT` });
	try {
		const apiUrl = getApiUrl(ENDPOINTS.GET_ADMIN_ACCOUNT, { id });
		const data: any = yield Requests.put(apiUrl, input);
		if (data && data.success) {
			yield put({ type: `${type}_SUCCESS`, data: data.account });
			yield put(showMessage('Update addmin account successful!'));
		} else {
			yield put({ type: `${type}_FAIL`, error: data.message });
		}
	} catch (e) {
		yield put({ type: `${type}_FAIL`, error: e.toString() });
	}
}

function* createAdminAccount({ input, type }: AnyAction) {
	yield put({ type: `${type}_ATTEMPT` });
	try {
		const apiUrl = getApiUrl(ENDPOINTS.CREATE_ADMIN_ACCOUNT);
		const data: any = yield Requests.post(apiUrl, input);
		if (data && data.success) {
			yield put({ type: `${type}_SUCCESS`, data: data.account });
			yield put(showMessage('Create addmin account successful!'));
		} else {
			yield put({ type: `${type}_FAIL`, error: data.message });
		}
	} catch (e) {
		yield put({ type: `${type}_FAIL`, error: e.toString() });
	}
}

function* getAdminAccounts({ type, limit, offset }: AnyAction) {
	yield put({ type: `${type}_ATTEMPT` });
	try {
		const apiUrl = getApiUrl(ENDPOINTS.GET_ADMIN_ACCOUNTS);
		const data: any = yield Requests.get(apiUrl, { limit, offset });
		if (data && data.success) {
			yield put({ type: `${type}_SUCCESS`, data: data.accounts });
		} else {
			yield put({ type: `${type}_FAIL`, error: data.message });
		}
	} catch (e) {
		yield put({ type: `${type}_FAIL`, error: e.toString() });
	}
}

function* getAdminAccount({ type, id }: AnyAction) {
	yield put({ type: `${type}_ATTEMPT` });
	try {
		const apiUrl = getApiUrl(ENDPOINTS.GET_ADMIN_ACCOUNT, { id });
		const data: any = yield Requests.get(apiUrl);
		if (data && data.success) {
			yield put({ type: `${type}_SUCCESS`, data: data.account });
		} else {
			yield put({ type: `${type}_FAIL`, error: data.message });
		}
	} catch (e) {
		yield put({ type: `${type}_FAIL`, error: e.toString() });
	}
}

function* updateAdminRole({ id, input, type }: AnyAction) {
	yield put({ type: `${type}_ATTEMPT` });
	try {
		const apiUrl = getApiUrl(ENDPOINTS.GET_ADMIN_ROLE, { id });
		const data: any = yield Requests.put(apiUrl, input);
		if (data && data.success) {
			yield put({ type: `${type}_SUCCESS`, data: data.role });
			yield put(showMessage('Update addmin role successful!'));
		} else {
			yield put({ type: `${type}_FAIL`, error: data.message });
		}
	} catch (e) {
		yield put({ type: `${type}_FAIL`, error: e.toString() });
	}
}

function* createAdminRole({ input, type }: AnyAction) {
	yield put({ type: `${type}_ATTEMPT` });
	try {
		const apiUrl = getApiUrl(ENDPOINTS.CREATE_ADMIN_ROLE);
		const data: any = yield Requests.post(apiUrl, input);
		if (data && data.success) {
			yield put({ type: `${type}_SUCCESS`, data: data.role });
			yield put(showMessage('Create addmin role successful!'));
		} else {
			yield put({ type: `${type}_FAIL`, error: data.message });
		}
	} catch (e) {
		yield put({ type: `${type}_FAIL`, error: e.toString() });
	}
}

function* getAdminRoles({ type, limit, offset }: AnyAction) {
	yield put({ type: `${type}_ATTEMPT` });
	try {
		const apiUrl = getApiUrl(ENDPOINTS.GET_ADMIN_ROLES);
		const data: any = yield Requests.get(apiUrl, { limit, offset });
		if (data && data.success) {
			yield put({ type: `${type}_SUCCESS`, data: data.roles, total: data.total });
		} else {
			yield put({ type: `${type}_FAIL`, error: data.message });
		}
	} catch (e) {
		yield put({ type: `${type}_FAIL`, error: e.toString() });
	}
}

function* getAdminRole({ type, id }: AnyAction) {
	yield put({ type: `${type}_ATTEMPT` });
	try {
		const apiUrl = getApiUrl(ENDPOINTS.GET_ADMIN_ROLE, { id });
		const data: any = yield Requests.get(apiUrl);
		if (data && data.success) {
			yield put({ type: `${type}_SUCCESS`, data: data.role });
		} else {
			yield put({ type: `${type}_FAIL`, error: data.message });
		}
	} catch (e) {
		yield put({ type: `${type}_FAIL`, error: e.toString() });
	}
}

export function* adminActions() {
	yield takeLatest(AllTypeActions.POST_LOGIN, postLogin);
	yield takeLatest(AllTypeActions.GET_CURRENT_ADMIN, getCurrentAdmin);
	yield takeLatest(AllTypeActions.GET_ADMIN_ACCOUNTS, getAdminAccounts);
	yield takeLatest(AllTypeActions.GET_ADMIN_ACCOUNT, getAdminAccount);
	yield takeLatest(AllTypeActions.CREATE_ADMIN_ACCOUNT, createAdminAccount);
	yield takeLatest(AllTypeActions.UPDATE_ADMIN_ACCOUNT, updateAdminAccount);
	yield takeLatest(AllTypeActions.GET_ADMIN_ROLES, getAdminRoles);
	yield takeLatest(AllTypeActions.GET_ADMIN_ROLE, getAdminRole);
	yield takeLatest(AllTypeActions.UPDATE_ADMIN_ROLE, updateAdminRole);
	yield takeLatest(AllTypeActions.CREATE_ADMIN_ROLE, createAdminRole);
}
