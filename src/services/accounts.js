// 处理异步请求
// 遵循restful
import request from '../utils/request';
import qs from 'qs';

export async function query(params) {
	return request(`/api/accounts?${qs.stringify(params)}`);
}

export async function remove(params) {
	return request('/api/accounts', {
		method: 'delete',
		body: qs.stringify(params),
	});
}
