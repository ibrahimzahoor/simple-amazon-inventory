import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { InventoryList } from '../schema.js';

Meteor.publish('inventory.list', ({skip, limit}) => {
  return InventoryList.find({}, {skip: skip, limit: limit});
});