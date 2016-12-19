import { Form,Icon,Input,Button } from 'antd';
import React,{ PropTypes } from 'react';
const FormItem=Form.Item;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const NoramlForm=Form.create()(React.createClass({
    handleSubmit(e){
      e.preventDefault();
      this.props.form.validateFields((err,values)=>{

      });
    },
    render(){
      const { getFieldDecorator } = this.props.form;
      return (
        <Form horizontal  onSubmit={this.handleSubmit}>
          <FormItem
            label="菜单名称："
            hasFeedback
            {...formItemLayout}
          >
            {getFieldDecorator('menuName', {
              initialValue: "",
              rules: [
                { required: true, message: '菜单名称未填写' },
              ],
            })(
              <Input type="text" />
            )}
          </FormItem>
          <FormItem
            label="菜单编码："
            hasFeedback
            {...formItemLayout}
          >
            {getFieldDecorator('menuCode', {
              initialValue:"",
              rules: [
                { required: true, message: '菜单编码未填写' },
              ],
            })(
              <Input type="text" />
            )}
          </FormItem>
          <FormItem
            label="上级目录："
            hasFeedback
            {...formItemLayout}
          >
            {getFieldDecorator('parentId', {
              initialValue: "",
              //rules: [
              //  { required: true, message: '不能为空' },
              //],
            })(
              <Input type="text" />
            )}
          </FormItem>

          <FormItem
            label="菜单Url："
            hasFeedback
            {...formItemLayout}
          >
            {getFieldDecorator('menuUrl', {
              initialValue:"",
              rules: [
                { required: true, message: '菜单Url未填写' },
              ],
            })(
              <Input type="text" />
            )}
          </FormItem>

          <FormItem
            label="图片Url："
            hasFeedback
            {...formItemLayout}
          >
            {getFieldDecorator('imageUrl', {
              initialValue:"",
              rules: [
                { required: true, message: '图片Url未填写' },
              ],
            })(
              <Input type="text" />
            )}
          </FormItem>

          <FormItem
            label="描述："
            hasFeedback
            {...formItemLayout}
          >
            {getFieldDecorator('desc', {
              initialValue:"",
              rules: [
                { required: true, message: '描述未填写' },
              ],
            })(
              <Input type="text" />
            )}
          </FormItem>

          <FormItem
            label="序号："
            hasFeedback
            {...formItemLayout}
          >
            {getFieldDecorator('sort', {
              initialValue:"",
              rules: [
                { required: true, message: '序号未填写' },
              ],
            })(
              <Input type="text" />
            )}
          </FormItem>

          <FormItem
            label="状态："
            hasFeedback
            {...formItemLayout}
          >
            {getFieldDecorator('status', {
              initialValue:"",
              rules: [
                { required: true, message: '状态未填写' },
              ],
            })(
              <Input type="text" />
            )}
          </FormItem>

          <FormItem
            label="深度："
            hasFeedback
            {...formItemLayout}
          >
            {getFieldDecorator('deep', {
              initialValue:"",
              rules: [
                { required: true, message: '描述未填写' },
              ],
            })(
              <Input type="text" />
            )}
          </FormItem>


          <FormItem wrapperCol={{ span: 12, offset: 6 }}>
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      );

    },

  }));

export default NoramlForm;
