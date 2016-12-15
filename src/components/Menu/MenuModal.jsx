import React, { PropTypes } from 'react';
import { Form, Input, Modal } from 'antd';
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const MenuModal = ({
  visible,
  item = {},
  onOk,
  onCancel,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
    },
  }) => {
  function handleOk() {
    validateFields((errors) => {
      if (errors) {
        return;
      }
      const data = { ...getFieldsValue(), key: item.id };
     	onOk(data);
    });
  }

  function checkPassword(rule, value, callback) {
    if (!value) {
      callback(new Error('密码未填写'));
    }
    if (!/^[0-9a-zA-Z]{6,10}$/.test(value)) {
      callback(new Error('密码不合法'));
    } else {
      callback();
    }
  }

  const modalOpts = {
    title: '修改用户',
    visible,
    onOk: handleOk,
    onCancel,
  };

  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem
          label="昵称："
          hasFeedback
          {...formItemLayout}
        >
          {getFieldDecorator('name', {
            initialValue: item.name,
            rules: [
              { required: true, message: '昵称未填写' },
            ],
          })(
            <Input type="text" />
          )}
        </FormItem>
        <FormItem
          label="密码："
          hasFeedback
          {...formItemLayout}
        >
          {getFieldDecorator('password', {
            initialValue: item.password,
            rules: [
              { validator: checkPassword },
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
          {getFieldDecorator('accountStatus', {
            initialValue: item.accountStatus,
            //rules: [
            //  { required: true, message: '不能为空' },
           	//],
          })(
            <Input type="text" />
          )}
        </FormItem>
      </Form>
    </Modal>
  );
};

MenuModal.propTypes = {
  visible: PropTypes.any,
  form: PropTypes.object,
  item: PropTypes.object,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
};

export default Form.create()(MenuModal);
