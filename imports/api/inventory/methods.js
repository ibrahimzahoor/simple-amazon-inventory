
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { InventoryList } from './schema.js';
import DummyList from '../../startup/both/dummy-list';

Meteor.methods({
  'inventory.list.count'() {
    const listsCount = InventoryList.find().count();
    if(listsCount) {
      return listsCount;
    }
  },
  'inventory.insert'() {
    const adjustmentsData = DummyList.dataSource.map(row => ({
      insertOne: {
        ...row,
      }
    }));
    if (adjustmentsData.length > 0) {
      return InventoryList.rawCollection().bulkWrite(adjustmentsData);
    }
    return Promise.resolve();
  }
});