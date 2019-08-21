import { Segment, Image, Header, Button, Icon } from 'semantic-ui-react'
import history from '../history'
import React, { Component } from 'react';


class PartInCart extends Component {
  style={
        height: '300px',
        margin: '5px',
        padding: '20px',
        display: 'flex',
        flexWrap: 'wrap',
  }

  

  render() {
    return (
      <Segment style={this.style}  > 
        <Segment onClick={()=>{history.push(`/parts/${this.props.part.id}`)}} compact className='partImage'>
            <Image src='https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image' size='small' />
        </Segment>
        <Segment basic className='partInfo'>
            <Header onClick={()=>{history.push(`/parts/${this.props.part.id}`)}} as='h3'> {this.props.part.year + ' ' + this.props.part.make + ' ' + this.props.part.model} </Header>
            <Header as='h4'> {this.props.part.color + ' ' + this.props.part.type} </Header>
            <Header as='h4'> {'$' + this.props.part.price} </Header>
            <Button style={{float: 'right'}} onClick={()=>{this.props.removeFromCart(this.props.inCart.id)}} size='large' animated='vertical'>
                <Button.Content hidden>
                    Remove
                </Button.Content>
                <Button.Content visible>
                    <Icon.Group size='large'>
                        <Icon color='black' name='shop' />
                        <Icon size='big' color='red' name='dont' />
                    </Icon.Group>
                </Button.Content>
            </Button>
        </Segment>
      </Segment>
    );
  }
}

export default PartInCart 
