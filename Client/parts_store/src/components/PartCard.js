import React, { Component } from 'react';
import { Segment, Image, Header } from 'semantic-ui-react'

export default class PartCard extends Component {
  style={
    borderStyle: 'solid',
        borderWidth: '5px',
     width: '300px',
        height: '350px',
        margin: '5px',
        padding: '5px',
        alignItems: 'center'
  }
  render() {
    return (
      <div style={this.style}> 
        <Header> {this.props.part.title} </Header>
        <Image src='https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image' size='big' />
      </div>
    );
  }
}
