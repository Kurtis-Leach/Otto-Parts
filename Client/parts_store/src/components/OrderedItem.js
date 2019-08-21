import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react'

export default class OrderedItem extends Component {
  render() {
      console.log (this.props.order.products)
    return (
      <Segment>
          <Header>{this.props.order.id}</Header>
          <Header>{this.props.order.products.title}</Header>
      </Segment>
    );
  }
}
