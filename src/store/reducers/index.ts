import { combineReducers } from 'redux';
import { IApplicationState } from './state';
import {
	GlobalSearchReducer,
	SystemMessageReducer,
	PostLoginReducer,
	GetAdminAccounts,
	GetAdminDetail,
	UpdateAdminAccount,
	CreateAdminAccount,
	GetAdminRoles,
	GetAdminRole,
	UpdateAdminRole,
	CreateAdminRole,
	AllPermissionsReducer,
	GetCurrentUserReducer,
} from './admin';
import { GetUsersReducser, AddUserReducer } from './user';
import { FilterProductReducser } from './store';
export const rootReducer = combineReducers<IApplicationState>({
	signin: PostLoginReducer,
	currentUser: GetCurrentUserReducer,
	permission: AllPermissionsReducer,
	search: GlobalSearchReducer,
	systemMessage: SystemMessageReducer,
	adminAccounts: GetAdminAccounts,
	adminDetail: GetAdminDetail,
	adminUpdate: UpdateAdminAccount,
	adminCreate: CreateAdminAccount,
	adminRoles: GetAdminRoles,
	adminRole: GetAdminRole,
	adminRoleUpdate: UpdateAdminRole,
	adminRoleCreate: CreateAdminRole,
	getUsers: GetUsersReducser,
	addUser: AddUserReducer,
	filterProduct: FilterProductReducser,
});

export const ApplicationState = (state: any, action: any) => {
	return rootReducer(state, action);
};

export * from './state';
