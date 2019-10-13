import React, { Component } from 'react';
import { Segment, Header, Image } from 'semantic-ui-react'
import Order from './Order';

const OrderedItem = (props) => {

    const style={
        borderStyle: 'solid',
        borderWidth: '5px',
        padding: '5%',
        width: '90%',
        height: '97%'
    }

    const imgStyle={
        width: '300px',
        height: '300px',
        marginRight: '0px'
    }

    const { type, color, make, model, year, price} = props.part

    return (
      <Segment basic style={style} >
          <Segment basic style={imgStyle}>
            <Image src='https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image' size='large' />
          </Segment>
          <Segment basic >
            <Header as='h3'> {year + ' ' + make + ' ' + model} </Header>
            <Header as='h4'> {color + ' ' + type} </Header>
            <Header as='h4'> {'$' + price} </Header>
          </Segment>
      </Segment>
    );
}

export default OrderedItem
