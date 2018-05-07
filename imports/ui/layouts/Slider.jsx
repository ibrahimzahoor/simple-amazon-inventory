import React, {Component} from 'react';
import { Menu, Icon, Layout } from 'antd';
import SiderLink from './sider/SiderLinks';
import './sider/sider.less';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { Sider } = Layout;

    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
        className="sider-container"
      >
        <div className="logo sider-logo" > Logo </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="anticon anticon-dashboard" />
            <span>Dashboard</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="anticon anticon-shopping-cart" />
            <span>
              <SiderLink name="Inventory" link="/inventory" />
            </span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="anticon anticon-user" />
            <span>Logout</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}
