import { TreeSelect } from 'antd';
import React,{ PropTypes } from 'react';

const MenuTree=({
  treeData,
  value,
  onChange,
  multiple,
  treeCheckable,
  showCheckedStrategy,
  searchPlaceholder,
})=>{
  const tProps = {
    treeData,
    value:value,
    onChange:onChange,
    multiple: multiple,
    treeCheckable: treeCheckable,
    showCheckedStrategy: showCheckedStrategy,
    searchPlaceholder: searchPlaceholder,
    style: {
      width: 300,
    },
  };

  return (
    <TreeSelect {...tProps}></TreeSelect>
  );

}

export default  MenuTree;
