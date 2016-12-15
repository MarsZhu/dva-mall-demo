import React, { PropTypes } from 'react';
/*import { routerRedux } from 'dva/router';*/
import { TreeSelect } from 'antd';
// 引入 connect 工具函数
import { connect } from 'dva';
// Menus 的 Presentational Component
import MenuTree from '../components/Menu/MenuTree';
import styles from './Accounts.less';
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

function Menus({location,dispatch,menus}) {

  const{ dataSource,selectValue }=menus;

/*  onChange(value) {
    console.log('onChange ', value, arguments);
    this.setState({ value });
  };*/

  const tProps = {
    treeData:dataSource,
    value:selectValue,
    onChange(value){
      dispatch({
        type: 'menus/changeValue',
        payload: {
          selectValue:value
        },
      });
    },
    multiple: true,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    searchPlaceholder: 'Please select',
    style: {
      width: 300,
    },
  };

  return (
    <div className={styles.normal}>
        <TreeSelect {...tProps} />
    </div>
  );
}

Menus.propTypes={
  menus:PropTypes.object
};

function mapStateToProps({ menus }) {
  return {menus};
}

export default connect(mapStateToProps)(Menus);

