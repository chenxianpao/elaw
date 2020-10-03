import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import { Link } from 'umi';

import styles from './index.less';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
/**
 <Layout className="layout">
 <Header>
 <div className="logo" />
 <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
 <Menu.Item key="1"><Link to="/test">首页</Link></Menu.Item>
 <Menu.Item key="2">法律资讯</Menu.Item>
 <Menu.Item key="3">法律文书</Menu.Item>
 </Menu>
 </Header>
 <Content style={{ padding: '0 50px' }}>
 <Breadcrumb style={{ margin: '16px 0' }}>
 <Breadcrumb.Item>Home</Breadcrumb.Item>
 <Breadcrumb.Item>List</Breadcrumb.Item>
 <Breadcrumb.Item>App</Breadcrumb.Item>
 </Breadcrumb>
 <div className="site-layout-content">Content</div>
 </Content>
 <Footer style={{ textAlign: 'center' }}>Moran Design ©2020 Created by Moran</Footer>
 </Layout>
 */