import React, {Fragment} from 'react'
import {Form, Input, Button, Checkbox, notification} from 'antd';
import {Link} from 'umi';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import styles from './login.less';
import {getUserList, login} from "@/requests/user";
import '@/utils/config';
class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // login()
  }

  onLogin(values) {
    console.log('Received values of form: ', values);
    login(values.email, values.password).then((result) => {
      console.log(result)
      notification.open({
        message: '登录成功',
        description: '登录成功，跳转到首页',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
      global.constants.username = values.email;
      global.constants.loginState = true;
      localStorage.setItem('userData', JSON.stringify(values));
      this.props.history.push('/test');
    })
    // getUserList().then((userList) => {
    //   console.log(userList.results);
    //   userList.results.forEach((item) => {
    //
    //     console.log(item)
    //     if (values.email == item.email && values.password == item.password) {
    //       notification.open({
    //         message: '登录成功',
    //         description:
    //           '登录成功，跳转到首页',
    //         onClick: () => {
    //           console.log('Notification Clicked!');
    //         },
    //       });
    //       this.props.history.push('/test');
    //     }
    //   })
    // });
  };

  render() {
    return (
      <Form
        name="normal_login"
        className={styles.loginForm}
        initialValues={{remember: true}}
        onFinish={this.onLogin.bind(this)}
      >
        <Form.Item
          name="email"
          rules={[{required: true, message: 'Please input your email!'}]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="email"/>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{required: true, message: 'Please input your Password!'}]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon"/>}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Link to={'resetPassword'} className={styles.loginFormForgot}>Forgot password</Link>

          {/*<a className={styles.loginFormForgot} href="">*/}
          {/*Forgot password*/}
          {/*</a>*/}
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
            Log in
          </Button>
          Or <Link to={'register'}>register now!</Link>
          {/*<a href="">register now!</a>*/}
        </Form.Item>
      </Form>
    )
  }
}

export default Login;