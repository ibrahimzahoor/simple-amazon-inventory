import React, { Component } from 'react';
import List from './inventory/List';

export default class Inventory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List {...this.props} />
    )
  }
}