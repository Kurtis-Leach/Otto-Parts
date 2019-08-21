import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react'

export default class OrderedItem extends Component {
  render() {
      console.log (this.props.order.products)
    return (
      <Segment>
          <Header>{'Order# ' + this.props.order.id}</Header>
      </Segment>
    );
  }
}
