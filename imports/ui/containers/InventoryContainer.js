import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Inventory from '../pages/Inventory.jsx';

import { InventoryList } from '../../api/inventory/schema.js';
import DummyList from '../../startup/both/dummy-list';

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    name: record.name,
  })
}

export default InventoryContainer = withTracker(({location, history, match}) => {
  
  const state = location.state || {};
  const skip = state && state.skip ? state.skip : 0;
  const limit = state && state.limit ? state.limit : 10;
  const page = state && state.page ? state.page : 1;

  const handle = Meteor.subscribe('inventory.list', {skip, limit});
  const list = handle.ready() ? InventoryList.find({}, {limit: limit}).fetch(): [];

  return (
    tableData = {
      dataSource: list ? list : [], 
      columns: DummyList.columns, 
      rowSelection, 
      page: page ? page : 1
    }
  );
})(Inventory);
