import { Form,Icon,Input,Button } from 'antd';
import React,{ PropTypes } from 'react';
const FormItem=Form.Item;

const MenuForm=( )=>{

    return (
      <Form  onSubmit={}>
        <FormItem>
          {
            getFieldDecorator ('userName',{
              rules:[{
                required:true,message:'请输入用户名'
              }],
            })(
              <Input addonBefore={<Icon type="user"/>} placeholder="UserName"></Input>
            )
          }
        </FormItem>
      </Form>

    );
}
export default MenuForm;
