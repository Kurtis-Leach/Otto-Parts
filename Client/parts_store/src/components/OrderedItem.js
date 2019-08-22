import React, { Component } from 'react';
import { Segment, Header, Image } from 'semantic-ui-react'

export default class OrderedItem extends Component {

    style={
        borderStyle: 'solid',
        borderWidth: '5px',
        width: '80%',
        height: '40%'
    }

    infoStyle={
        left: '80%',
    }

    imgStyle={
        width: '400px',
        height: '300px',
        marginRight: '0px'
    }

  render() {
      console.log (this.props.part)
      let { type, color, make, model, year, price, img, description} = this.props.part
    return (
      <Segment style={this.style} >
          <Segment basic style={this.imgStyle}>
            <Image src='https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image' size='large' />
          </Segment>
          <Segment basic style={this.infoStyle}>
            <Header as='h3'> {year + ' ' + make + ' ' + model} </Header>
            <Header as='h4'> {color + ' ' + type} </Header>
            <Header as='h4'> {'$' + price} </Header>
          </Segment>
      </Segment>
    );
  }
}
