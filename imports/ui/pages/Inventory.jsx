import React, { Component } from 'react';
import List from './inventory/List';
import { withRouter } from 'react-router-dom';

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state= {
      total: 1
    }
  }

  componentWillMount() {
    Meteor.call('inventory.list.count', (err, res) => {
      if(res) {
        this.setState({total: res});
      }
    })
  }

  render() {
    return (
      <List {...this.props} {...this.state} />
    )
  }
}

export default withRouter(Inventory);