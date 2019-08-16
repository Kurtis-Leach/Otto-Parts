import React, { Component } from 'react';
import { Segment, Image, Header, Button, Icon } from 'semantic-ui-react'

export default class PartCard extends Component {
  style={
    borderStyle: 'solid',
        borderWidth: '5px',
        // width: '200px',
        // height: '225px',
        margin: '5px',
        padding: '20px',
        alignItems: 'center'
  }
  // <div style={this.style}> 
  //       <Header as='h2'> {this.props.part.title} </Header>
  //       <Image src='https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image' size='small' />
  //     </div>
  render() {
    return (
      <Segment style={this.style} compact> 
        <Header as='h2'> {this.props.part.title} </Header>
        <Image src='https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image' size='small' />
        <Button  fluid size='tiny' animated='vertical'>
            <Button.Content hidden>
              Add To Cart
            </Button.Content>
            <Button.Content visible>
              <Icon name='shop' />
            </Button.Content>
        </Button>
      </Segment>
    );
  }
}
