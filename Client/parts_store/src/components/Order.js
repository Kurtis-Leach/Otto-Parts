import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react'
import OrderedItem from './OrderedItem';

export default class Order extends Component {

    style={
        borderStyle: 'solid',
            borderWidth: '5px',
            padding: '20px',
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            width: '1500px',
            height: '1200px',
            margin: 'auto',
            justifyContent: 'center',
            flexDirection: 'row',
    }
    
  render() {
      console.log (this.props.order.products)

    return (
      <Segment style={this.style} padded='very'>
          <Header>{'Order# ' + this.props.order.id}</Header>
          {this.props.order.products.map((part)=><OrderedItem part={part}/>)}
      </Segment>
    );
  }
}
