import React, { Component } from 'react';
import { Segment, Header, Image, } from 'semantic-ui-react'
import PlaceholderImg from '../assets/PartPlaceholderImg.png'

export default class OrderedItem extends Component {

    style={
        borderStyle: 'solid',
        borderWidth: '5px',
        padding: '5%',
        width: '90%',
        height: '97%'
    }

    // infoStyle={
    //     left: '80%',
    // }

    imgStyle={
        width: '300px',
        height: '300px',
        marginRight: '0px'
    }

  render() {
      console.log (this.props.part)
      let { type, color, make, model, year, price, img} = this.props.part
      if (img === null){
        img=PlaceholderImg
      }
      if (color === 'None'){
        color = ''
      }
    return (
      <Segment basic style={this.style} > 
          <Segment basic style={this.imgStyle}>
            <Image src={img} alt='' size='large' />
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
