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
    selectValue,
    dataSource
  }=menus;

  const menuFormProps={

    submitData(){
      dispatch({
        type: 'menus/modifyMenus',
        payload: data
      }
    );
    }
  };

  const menuTreeProps = {
    treeData:dataSource,
    value: selectValue,
    onChange(value) {
      dispatch({
        type: 'menus/changeValue',
        payload: {
          selectValue:value
        },
      });
    },
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
      <MenuForm {...menuFormProps}></MenuForm>
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
