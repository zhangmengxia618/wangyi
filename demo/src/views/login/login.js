import React, { Component } from 'react'
import {inject, observer} from 'mobx-react';
import styles from './login.scss';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';

export class login extends Component {
    // handleSubmit = e => {
    //     e.preventDefault();
    //     this.props.form.validateFields((err, values) => {
    //       if (!err) {
    //         console.log('Received values of form: ', values);
    //       }
    //     });
    //   };
    
    render() {
        let { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.wrap}>
                <div className={styles.normal}>
                    <Form className={styles['login-form']} onSubmit={this.handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                validateTrigger: 'onBlur',
                                rules: [{ required: true, message: 'Please input your username!' },
                                { min: 6, max: 15, message: '请输入最少6个字符，最多15个字符' }],
                            })(
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0, .25)' }} />}
                                placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                validateTrigger: 'onBlur',
                                rules: [{ required: true, message: 'Please input your Password!' },
                                { pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!#@*&.]).*$/, message: 'Please input your Passworddddd' }],
                            })(
                                <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Checkbox>Remember me</Checkbox>
                            <a className={styles["login-form-forgot"]} href="">
                                Forgot password
                            </a>
                            <Button type="primary" htmlType="submit" className={styles["login-form-button"]}>
                                登录
                            </Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
      //处理表单提交
   handleSubmit = (e) => {
    // e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login({ user_name: values.username, user_pwd: values.password })

      }
    });
  }
   

}

export default login
