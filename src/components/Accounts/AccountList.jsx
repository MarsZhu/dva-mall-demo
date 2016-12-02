import React, { PropTypes } from 'react';
import { Table, message, Popconfirm, Pagination } from 'antd';

// 采用 stateless 的写法
const AccountList = ({
	total,
	current,
	size,
	loading,
	dataSource,
	onPageChange,
	onEditItem,
	onDeleteItem
}) => {
  const columns = [{
    title: '昵称',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href="#">{text}</a>,
  }, {
    title: '密码',
    dataIndex: 'password',
    key: 'password',
  }, {
    title: '状态',
    dataIndex: 'accountStatus',
    key: 'accountStatus',
  }, {
    title: '操作',
    key: 'operation',
    render: (text, record) => (
      <p>
        <a onClick={ () => onEditItem(record) }>编辑</a>
        &nbsp;
        <Popconfirm title="确定要删除吗？" onConfirm={ () => onDeleteItem(record.id) }>
          <a>删除</a>
        </Popconfirm>
      </p>
    ),
  }];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={record => record.id}
        pagination={false}
      />
			<Pagination
				style={{margin: '16px 0', position: 'absolute', right: 0 }}
				total={total}
				current={current}
				pageSize={size}
				onChange={onPageChange}
			/>
    </div>
  );
}

export default AccountList;
