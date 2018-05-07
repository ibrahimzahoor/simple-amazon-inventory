import React, { Component } from 'react';
import { Layout, Table } from 'antd';
import { Spin } from 'antd';
import './inventory.less';

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    }
  }

  render() {
    const { dataSource, columns, rowSelection } = this.props;

    return (
      <div className='inventory-container'>
        <Spin spinning={this.state.loading} className="spinner-position" size="large" />
        <Table className="content" rowSelection={rowSelection} dataSource={dataSource} columns={columns} />
      </div>
    )
  }
}