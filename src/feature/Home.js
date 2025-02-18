import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Home.css';
import PostCard from './PostCard';
const { Header, Content } = Layout;

const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const handlePostBtnClick = (msg) => {
  console.log(msg);
};

function Home() {
  const [articlData, setArticleData] = useState('hello world');
  useEffect(() => {
    axios
      .get('https://baidu.com')
      .then((res) => setArticleData(res.data))
      .catch((error) => console.error('error data'));
  }, []);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo"></div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            backgroundColor: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Button
            type="primary"
            className="post-btn"
            onClick={() => handlePostBtnClick('test')}
          >
            发一篇
          </Button>
          {articlData && <div>Article Data: {JSON.stringify(articlData)}</div>}
          <PostCard></PostCard>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default Home;
