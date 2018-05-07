import React, { Component } from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Slider from '../layouts/Slider';
import BreadCrumbs from '../components/BreadCrumbs';
import { Layout } from 'antd';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const { Content } = Layout;

    return (
      <Layout> 
        <Slider {...this.state} />
        <Layout>
          <Header {...this.state} toggle={this.toggle}/>
            <div id="myAppContainer">
              <Content className="content-container">
                <BreadCrumbs currentPosition={'Dashboard'} /> 
                {this.props.children}
              </Content>
            </div>
            <Footer />
        </Layout>
      </Layout>
    )
  }
}
