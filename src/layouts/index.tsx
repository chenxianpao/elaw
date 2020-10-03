import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';
import styles from './index.less';
import { Row, Col, Divider } from 'antd';
import { Input, Space } from 'antd';
import { QqOutlined} from '@ant-design/icons';

const { Search } = Input;
const { Header, Content, Footer } = Layout;
const menuData = [
  { route: 'test', name: '首页' },
  { route: 'news', name: '法律资讯' },
  { route: 'summoner', name: '法律文书' },
];

function BasicLayout(props) {
  const {
    location: { pathname },
    children,
  } = props;

  return (
    <Layout>
      {/*<div>*/}
        {/*<div>登录<input type="text"/>注册</div>*/}
      {/*</div>*/}
      {/*<div className="top">gugu</div>*/}
      <Row className={styles.top} justify="space-around">
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}>
          <Space>
            <Link to={'login'}>登录</Link>
            <Link to={'register'} >注册</Link>
          </Space>
        </Col>
      </Row>
      <Row className={styles.page_header} justify="space-around">
        <Col span={6}></Col>
        <Col span={6}><QqOutlined className={styles.logo} /></Col>
        <Col span={6}>
          <Search className={styles.search} placeholder="input search text" onSearch={value => console.log(value)} enterButton />
        </Col>
        <Col span={6}></Col>
      </Row>
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