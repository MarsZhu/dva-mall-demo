import React, { PropTypes } from 'react';
import { routerRedux } from 'dva/router';

// 引入 connect 工具函数
import { connect } from 'dva';

// Accounts 的 Presentational Component
import AccountList from '../components/Accounts/AccountList';
import AccountSearch from '../components/Accounts/AccountSearch';
import AccountModal from '../components/Accounts/AccountModal';

// 引入对应的样式
// 可以暂时新建一个空的
import styles from './Accounts.less';

function Accounts({ location, dispatch, accounts }) {

	const {
		loading, list, total, current, size,
		currentItem, modalVisible, modalType
	} = accounts;

	const AccountSearchProps = {};
	const AccountListProps = {
		dataSource: list,
		total,
		loading,
		current,
		size,
		onPageChange(page) {
			dispatch(routerRedux.push({
				pathname: '/accounts',
				query: { current: page, size },
			}));
		},
		onEditItem(item) {
			dispatch({
				type: 'accounts/showModal',
				payload: item
			});
		},
		onDeleteItem(id) {
			dispatch({
				type: 'accounts/delete',
				payload: id
			});
		}
	};
	const AccountModalProps = {
		visible: modalVisible,
		item: currentItem,
		onOk: (data) => {
			dispatch({
				type: 'accounts/hideModal'
			});
		},
		onCancel: () => {
			dispatch({
				type: 'accounts/hideModal'
			});
		}
	};

	// 解决 Form.create initialValue 的问题
	// 每次创建一个全新的组件, 而不做diff
	const AccountModalGen = () =>
	    <AccountModal {...AccountModalProps} />;

	return (
		<div className={styles.normal}>
			{/* 用户筛选搜索框 */}
			{<AccountSearch {...AccountSearchProps} />}
			{/* 用户信息展示列表 */}
			<AccountList {...AccountListProps} />
			{/* 添加用户 & 修改用户弹出的浮层 */}
			<AccountModalGen />
		</div>
	);
}

Accounts.propTypes = {
	accounts: PropTypes.object
};

// 指定订阅数据，这里关联了 accounts
function mapStateToProps({ accounts }) {
	return {accounts};
}

// 建立数据关联关系
export default connect(mapStateToProps)(Accounts);
