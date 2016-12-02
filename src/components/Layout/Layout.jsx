import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'dva/router';
import { Menu, Breadcrumb, Icon } from 'antd';

import styles from './Layout.less';

const SubMenu = Menu.SubMenu;

const Layout = (props) => {
  return (
		<div className={styles["ant-layout-aside"]}>
			<aside className={styles["ant-layout-sider"]}>
				<div className={styles["ant-layout-logo"]}></div>
				<Menu mode="inline" theme="dark"
					defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
					<SubMenu key="sub1" title={<span><Icon type="setting" />系统管理</span>}>
						<Menu.Item key="1"><Link to="/accounts">帐号管理</Link></Menu.Item>
						<Menu.Item key="2">角色管理</Menu.Item>
						<Menu.Item key="3">权限管理</Menu.Item>
					</SubMenu>
					<SubMenu key="sub2" title={<span><Icon type="user" />xx管理</span>}>
						<Menu.Item key="5">yy管理</Menu.Item>
						<Menu.Item key="6">zz管理</Menu.Item>
					</SubMenu>
				</Menu>
			</aside>
			<div className={styles["ant-layout-main"]}>
				<div className={styles["ant-layout-header"]}></div>
				<div className={styles["ant-layout-breadcrumb"]}>
					<Breadcrumb>
						<Breadcrumb.Item>首页</Breadcrumb.Item>
						<Breadcrumb.Item>应用列表</Breadcrumb.Item>
						<Breadcrumb.Item>某应用</Breadcrumb.Item>
					</Breadcrumb>
				</div>
				<div className={styles["ant-layout-container"]}>
					<div className={styles["ant-layout-content"]}>
						<div style={{position: 'relative', paddingBottom: '60px'}}>
						{props.children}
						</div>
					</div>
				</div>
				<div className={styles["ant-layout-footer"]}>
					版权所有 © 2016 spdy-nerv
				</div>
			</div>
		</div>
  );
};

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
