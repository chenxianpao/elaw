import React from 'react';
import styles from './resetPassword.less';
import { Link } from 'umi';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class PasswordReset extends React.Component {
  constructor(props){
    super(props);
  }
  onFinish(values) {
    console.log('Received values of form: ', values);
  };
  render(){
    return (
      <Form
        name="forget_password"
        className={styles.loginForm}
        initialValues={{ remember: true }}
        onFinish={this.onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
            RESET PASSWORD
          </Button>
          If you prefer, you can <Link to={'register'}>Create a New Account</Link> or <Link to={'login'}>Return to Sign In</Link>.
          {/*<a href="">register now!</a>*/}
        </Form.Item>
      </Form>
    )
  }
}

export default PasswordReset;
// {/*<div>*/}
//   {/*<h1>*/}
//     {/*<span>Password Reset</span>*/}
//   {/*</h1>*/}
//   {/*<label htmlFor="">We will email you instructions on how to reset your password.</label>*/}
//   {/*<div className={styles.signInWrapper}>*/}
//     {/*<div>*/}
//       {/*<label htmlFor="">Email</label>*/}
//       {/*<input type="text"/>*/}
//     {/*</div>*/}
//     {/*<div>*/}
//       {/*<Button type="primary">Reset Password</Button>*/}
//     {/*</div>*/}
//     {/*<div>*/}
//       {/*<label htmlFor="">If you prefer, you can </label>*/}
//       {/*<Link to={'register'} className={styles.top_button}>Create a New Account</Link>*/}
//       {/*<label htmlFor=""> or </label>*/}
//       {/*<Link to={'login'} className={styles.top_button}>Return to Sign In</Link>*/}
//     {/*</div>*/}
//   {/*</div>*/}
//   {/*<div>*/}
//     {/*<ul>*/}
//       {/*<li>*/}
//         {/*Create and save unlimited legal documents*/}
//       {/*</li>*/}
//       {/*<li>*/}
//         {/*Never lose your work*/}
//       {/*</li>*/}
//       {/*<li>*/}
//         {/*Free technical support*/}
//       {/*</li>*/}
//       {/*<li>*/}
//         {/*Over 10 million users*/}
//       {/*</li>*/}
//     {/*</ul>*/}
//   {/*</div>*/}
// {/*</div>*/}