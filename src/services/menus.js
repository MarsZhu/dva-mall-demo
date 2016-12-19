/**
 * Created by Mars on 2016/12/15.
 */
import request from '../utils/request';
import qs from 'qs';

export async function query(params) {
  return request('/api/menus');
}
export async function submitData(params) {
  return request('/api/menus',params);
}
