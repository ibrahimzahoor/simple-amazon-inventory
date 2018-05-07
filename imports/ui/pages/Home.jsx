import React, {Component} from 'react';
import { Layout } from 'antd';
import BreadCrumbs from '../components/BreadCrumbs';

import './home/home.less';

export default class Home extends Component {

  render() {

    const { Content } = Layout;

    return (
      <div className="home-container">
        <div className="content">
          Content
        </div>
      </div>
    );
  };
};