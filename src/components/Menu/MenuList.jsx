import React, { PropTypes } from 'react';
import { Table, message, Popconfirm, Pagination } from 'antd';

// 采用 stateless 的写法
const MenuList = ({
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
    title: '菜单',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href="#">{text}</a>,
  }, {
    title: '编码',
    dataIndex: 'code',
    key: 'password',
  }, {
    title: '菜单URL',
    dataIndex: 'url',
    key: 'url',
  }, {
    title: '图片URL',
    dataIndex:"imageUrl",
    key: 'imageUrl',
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

export default MenuList;
