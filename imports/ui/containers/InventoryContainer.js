import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Inventory from '../pages/Inventory.jsx';

const dataSource=[];

//dummy data remove after publications
for(let i = 0 ; i < 46; i++) {
  dataSource.push({
    key: i,
    name: `amir ${i}`,
    age: `age ${i}`,
    address: `address ${i}`,
    DOB: `date ${i}`, 
    titlt: `title ${i}`,
    rddress: `rihaish ${i}`
  })
}
//dummy data removed after publications
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
},{
  title: 'DOB',
  dataIndex: 'DOB',
  key: 'DOB',
},{
  title: 'Ttitle',
  dataIndex: 'titlt',
  key: 'titlt',
},{
  title: 'Rihaish',
  dataIndex: 'rddress',
  key: 'rddress',
}];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    name: record.name,
  })
}

export default InventoryContainer = withTracker(({location, history, match}) => {
  return (
    tableData = {dataSource, columns, rowSelection}
  );
})(Inventory);