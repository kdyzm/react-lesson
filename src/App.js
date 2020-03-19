import React, { Component } from 'react';
// import logo from './assets/images/logo.svg';
// import './assets/css/App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './assets/css/index.css';
import './assets/css/Common.css';
import routes from './config/routes';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;


class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render(){
    return (
      <Router>
        <div className="app">
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <UserOutlined />
              <span><Link to="/">首页</Link></span>
            </Menu.Item>
            <Menu.Item key="2">
              <VideoCameraOutlined />
              <span><Link to="/news">新闻</Link></span>
            </Menu.Item>
            <Menu.Item key="3">
              <UploadOutlined />
              <span><Link to="/product">产品</Link></span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {
            routes.map((route,key)=>{
              if(route.exact){
                return <Route key={key} path={route.path} exact
                
                  render={props => (
                    // pass the sub-routes down to keep nesting
                    <route.component {...props} routes={route.routes} />
                  )}
                
                />
              }else{
                return <Route key={key} path={route.path}
                
                render={props => (
                  // pass the sub-routes down to keep nesting
                    <route.component {...props} routes={route.routes} />
                )}
                
                />
              }
            })
          }
          </Content>
        </Layout>
      </Layout>
      </div>
      </Router>
    );
  }
  
}

export default App;
