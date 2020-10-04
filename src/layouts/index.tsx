import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';
import styles from './index.less';
import { Row, Col, Divider } from 'antd';
import { Input, Space, Button } from 'antd';
import { QqOutlined} from '@ant-design/icons';

const { Search } = Input;
const { Header, Content, Footer } = Layout;
const menuData = [
  { route: 'test', name: '首页' },
  { route: 'news', name: '法律资讯' },
  { route: 'legalDocuments', name: '法律文库' },
  { route: 'tools', name: '法律工具' },

];

function loginOut(){
  console.log("login out");
  global.constants.loginState = false;
  location.reload();
}

function getUserInfo() {
  if (global.constants.loginState) {
    return <div>显示的元素</div>
  } else {
    return (
      <div>
        <Link to={'login'} className={styles.top_button}>登录</Link>
        <Divider type="vertical" />
        <Link to={'register'} className={styles.top_button}>注册</Link>
      </div>
    )
  }
}

function BasicLayout(props) {
  const {
    location: { pathname },
    children,
  } = props;

  console.log(localStorage.getItem("userData").test);

  return (
    <Layout>
      {/*<div>*/}
        {/*<div>登录<input type="text"/>注册</div>*/}
      {/*</div>*/}
      {/*<div className="top">gugu</div>*/}
      <Row className={styles.top} justify="space-around">
        <Col span={4}>
          <label htmlFor="" className={styles.logo}>Logo</label>
          {/*<QqOutlined className={styles.logo} />*/}
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}>
          <Space style={{marginTop: "10px"}}>
            <Link to={'login'} className={styles.top_button}>110</Link>
            <Divider type="vertical" />
            <Link to={'login'} className={styles.top_button}>帮助中心</Link>
            <Divider type="vertical" />
            {/*{getUserInfo}*/}
            {
              // localStorage.getItem("userData").username
              global.constants.loginState?(
                <div>{global.constants.username}
                  <Divider type="vertical" />
                  <Button type="text" onClick={loginOut}>注销</Button>
                  {/*<Link to={'loginOut'} className={styles.top_button}>注销</Link>*/}
                </div>
              ):<div>
                <Link to={'login'} className={styles.top_button}>登录</Link>
                <Divider type="vertical" />
                <Link to={'register'} className={styles.top_button}>注册</Link>
                </div>
            }
          </Space>
        </Col>
      </Row>
      {/*<Row className={styles.page_header} justify="space-around">*/}
        {/*<Col span={6}></Col>*/}
        {/*<Col span={6}><QqOutlined className={styles.logo} /></Col>*/}
        {/*<Col span={6}>*/}
          {/*<Search className={styles.search} placeholder="input search text" onSearch={value => console.log(value)} enterButton />*/}
        {/*</Col>*/}
        {/*<Col span={6}></Col>*/}
      {/*</Row>*/}
      {/*<div>*/}
        {/*<img alt="logo" src={'/public/logo.svg'} />*/}
        {/*<Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />*/}
      {/*</div>*/}
      {/*<div>logo <input type="text"/>搜索</div>*/}
      <Header>
        <div className={styles.logo}></div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[pathname]}
          style={{ lineHeight: '64px' }}
        >
          {menuData.map(menu => (
            <Menu.Item key={`/${menu.route}`}>
              <Link to={menu.route}>{menu.name}</Link>
            </Menu.Item>
          ))}
        </Menu>

      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>eLaw ©2020 chenxianpao</Footer>
    </Layout>
  );
}
export default BasicLayout;