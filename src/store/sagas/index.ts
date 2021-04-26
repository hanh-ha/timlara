import { all, fork } from 'redux-saga/effects';
import { adminActions } from './admin';
import { userActions } from './user';
import { storeActions } from './store';

export function* AllSagaActions() {
	yield all([fork(adminActions), fork(userActions), fork(storeActions)]);
}
