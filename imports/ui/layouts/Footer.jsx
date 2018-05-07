import React, {Component} from 'react';
import { Layout } from 'antd';
import './footer/footer.less';

export default class Foot extends Component {  
  render() {
    const { Footer } = Layout;

    return (
      <Footer className="footer-align">
        Powered by Qbatch 
      </Footer>
    );
  };
};