import React from 'react'
import { Form, Input, Button, notification  } from 'antd';
import { Link } from 'umi';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

// import pdfjs from 'pdfjs-dist';
// import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
// import { List as VList } from 'react-virtualized';
// import { TextLayerBuilder } from 'pdfjs-dist/web/pdf_viewer';
// import 'pdfjs-dist/web/pdf_viewer.css';
import styles from './login.less';
import {createUser} from "@/requests/user";

// pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

class Register extends React.Component {
  constructor(props){
    super(props);
  }
  onRegister(values) {

    console.log('Received values of form: ', values);
    // createUser(values["email"], values["email"], values["password"]);
    notification.open({
      message: '注册成功',
      description:
        '注册成功，跳转到登录界面',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
    this.props.history.push('/login');
  };
  render(){
    return (
      <Form
        name="register"
        className={styles.loginForm}
        onFinish={this.onRegister.bind(this)}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Create Password"
          />
        </Form.Item>
        <Form.Item
          name="retype_password"
          rules={[{ required: true, message: 'Please retype your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Retype Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
            Create My Free Account
          </Button>
          Already have an account?<Link to={'login'}>Sign In</Link>
          {/*<a href="">register now!</a>*/}
        </Form.Item>

      </Form>
    )
  }
};

export default Register;

// {/*<div>*/}
//   {/*<h1>*/}
//     {/*<span>Create Your Free Account</span>*/}
//   {/*</h1>*/}
//   {/*<div className={styles.signInWrapper}>*/}
//     {/*<div>*/}
//       {/*<label htmlFor="">Email</label>*/}
//       {/*<input type="text"/>*/}
//     {/*</div>*/}
//     {/*<div>*/}
//       {/*<label htmlFor="">Create Password</label>*/}
//       {/*<input type="text"/>*/}
//     {/*</div>*/}
//     {/*<div>*/}
//       {/*<label htmlFor="">Retype Password</label>*/}
//       {/*<input type="text"/>*/}
//     {/*</div>*/}
//     {/*<div>*/}
//       {/*<Button type="primary">Create My Free Account</Button>*/}
//     {/*</div>*/}
//     {/*<div>*/}
//       {/*<label htmlFor="">Already have an account?</label>*/}
//       {/*<Link to={'login'} className={styles.top_button}>登录</Link>*/}
//     {/*</div>*/}
//   {/*</div>*/}
// {/*</div>*/}