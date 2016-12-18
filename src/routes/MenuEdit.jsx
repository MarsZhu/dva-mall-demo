import React,{ PropTypes } from 'react';
import { routerRedux } from 'dva/router';

import { connect } from 'dva';

import MenuForm from '../components/Menu/MenuForm';
import MenuTree from '../components/Menu/MenuTree';

function MenuEdit({ location,dispatch,menus}) {

  const {
    menuName,
    parentId,
    menuUrl,
    imageUrl,
    desc,
    sort,
    status,
    deep,
    treeData
  }=menus;

  const menuTreeProps = {
    treeData,
    // value: this.state.value,
    // onChange: this.onChange,
    multiple: true,
    treeCheckable: true,
    // showCheckedStrategy: SHOW_PARENT,
    searchPlaceholder: 'Please select',
    style: {
      width: 300,
    },
  };

  return (
    <div>
      <MenuForm ></MenuForm>
      <MenuTree {...menuTreeProps}/>

    </div>
  );

}

MenuEdit.propTypes ={

};

function mapStateToProps( {menus}) {
  return {menus};
}

export default connect(mapStateToProps)(MenuEdit);
