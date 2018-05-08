const dataSource=[];

for(let i = 0 ; i < 50; i++) {
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

export default {dataSource, columns};