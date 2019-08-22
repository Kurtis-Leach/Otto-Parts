import { Segment, Image, Header, Button, Icon } from 'semantic-ui-react'
import history from '../history'
import React, { Component } from 'react';


class PartInCart extends Component {
  style={
        height: '400px',
        margin: '5px',
        padding: '20px',
        display: 'flex',
        flexWrap: 'wrap',
  }

  removeButtonStyle={
    float: 'right',
    
  }

  

  render() {
    let infoClass = this.props.removeFromCart ? 'partInfo' : null
    let pictureClass = this.props.removeFromCart ? 'partImage' : null
    let pictureSize = this.props.removeFromCart ? 'small' : 'medium'
    let { id, type, color, make, model, year} = this.props.part
    return (
      <Segment style={this.style}  > 
        <Segment basic onClick={()=>{history.push(`/parts/${id}`)}} compact className={pictureClass}>
            <Image src='https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image' size={pictureSize} />
        </Segment>
        <Segment basic className={infoClass}>
            <Header onClick={()=>{history.push(`/parts/${id}`)}} as='h3'> {year + ' ' + make + ' ' + model} </Header>
            <Header as='h4'> {color + ' ' + type} </Header>
            <Header as='h4'> {'Price:  $' + this.props.part.price} </Header>
            {this.props.removeFromCart ? 
            <Button style={this.removeButtonStyle} onClick={()=>{this.props.removeFromCart(this.props.inCart.id)}} size='huge' animated='vertical'>
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
            :
            null}
            
        </Segment>
      </Segment>
    );
  }
}

export default PartInCart 
