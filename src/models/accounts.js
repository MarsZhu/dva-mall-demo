import { hashHistory } from 'dva/router';
import { query, remove } from '../services/accounts';
import { DEFAULT_PAGE_CURRENT, DEFAULT_PAGE_SIZE } from '../constants';

export default {
  namespace: 'accounts',

  state: {
    list: [],
    total: null,
    loading: false, // 控制加载状态
    current: null, // 当前分页信息
		size: null, // 每页记录数
    currentItem: {}, // 当前操作的用户对象
    modalVisible: false, // 弹出窗的显示状态
    modalType: 'create', // 弹出窗的类型（添加用户，编辑用户）
  },

	subscriptions: {
		setup({ dispatch, history }) {
			history.listen(location => {
				if (location.pathname === '/accounts') {
					dispatch({
						type: 'query',
						payload: {
							current: DEFAULT_PAGE_CURRENT,
							size: DEFAULT_PAGE_SIZE,
							...location.query
						}
					});
				}
			});
		},
	},

	effects: {
		*query({ payload }, { select, call, put }) {
			yield put({ type: 'showLoading' });
      const { data } = yield call(query, payload);
			if (data) {
				yield put({
					type: 'querySuccess',
					payload: {
						list: data.data,
						total: data.page.total,
						current: +payload.current,
						size: +payload.size
					}
				});
			}
		},
		*create(){},
		*delete({ payload }, { select, call, put }) {
			yield put({ type: 'showLoading' });
			const { data } = yield call(remove, { id: payload });
			if (data && data.success) {
				yield put({
					type: 'deleteSuccess',
					payload
				});
			}
		},
		*update(){},
	},
	reducers: {
		showLoading(state, action) {
			return { ...state, loading: true };
		}, // 控制加载状态的 reducer
		showModal(state, action) {
			return {...state, modalVisible: true, currentItem: action.payload};
		}, // 控制 Modal 显示状态的 reducer
		hideModal(state, action) {
			return {...state, modalVisible: false};
		},
		querySuccess(state, action) {
			return {...state, ...action.payload, loading: false};
		},
		createSuccess(){},
		deleteSuccess(state, action) {
			const id = action.payload;
			const newList = state.list.filter(account => +account.id !== +id);
			return {...state, list: newList, loading: false};
		},
		updateSuccess(){},
	}
}
