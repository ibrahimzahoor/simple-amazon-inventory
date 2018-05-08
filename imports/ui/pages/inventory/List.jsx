import React, { Component } from 'react';
import { Layout, Table, Pagination } from 'antd';
import { Spin } from 'antd';
import './inventory.less';

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    }
  }

  onChange = (pageNumber) => {
    const { location } = this.props;
    location.state = { 
      skip: (pageNumber -1) * 10,
      limit: 10,
      page: pageNumber
    }
    this.props.history.push('/inventory' ,{...this.props.location.state})
  }


  render() {
    const { dataSource, columns, rowSelection, total, page } = this.props;
    return (
      <div className='inventory-container'>
        <Spin spinning={this.state.loading} className="spinner-position" size="large" />
        <Table 
          className="content" 
          rowSelection={rowSelection} 
          dataSource={dataSource} 
          pagination={false} 
          columns={columns} 
        />
        <Pagination 
          className="pagination" 
          showQuickJumper 
          defaultCurrent={page} 
          total={total} 
          onChange={this.onChange} 
        />
      </div>
    )
  }
}