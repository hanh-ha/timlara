import _ from 'lodash';

export const ENDPOINTS = {
	POST_LOGIN: '/api/login',
	GET_CURRENT_ADMIN: '/api/admin/current',
	GET_ADMIN_ROLES: '/api/admin/roles',
	GET_ADMIN_ROLE: '/api/admin/role/:id',
	CREATE_ADMIN_ROLE: '/api/admin/role',
	GET_ADMIN_ACCOUNTS: '/api/admin/accounts',
	CREATE_ADMIN_ACCOUNT: '/api/admin/account',
	GET_ADMIN_ACCOUNT: '/api/admin/account/:id',
};

export const getApiUrl = (endpoint: string, params?: any): string => {
	let path = endpoint;
	if (params) {
		_.forEach(params, (value, key) => {
			const replace = `:${key}`;
			if (path.indexOf(replace) !== -1) {
				const re = new RegExp(replace, 'g');
				path = path.replace(re, value.toString());
			}
		});
	}
	return path;
};
