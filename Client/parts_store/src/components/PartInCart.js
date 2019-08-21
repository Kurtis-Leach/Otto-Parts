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
    let infoClass = this.props.removeFromCart ? 'partInfo' : null
    let pictureClass = this.props.removeFromCart ? 'partImage' : null
    let pictureSize = this.props.removeFromCart ? 'small' : 'medium'
    return (
      <Segment style={this.style}  > 
        <Segment basic onClick={()=>{history.push(`/parts/${this.props.part.id}`)}} compact className={pictureClass}>
            <Image src='https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image' size={pictureSize} />
        </Segment>
        <Segment basic className={infoClass}>
            <Header onClick={()=>{history.push(`/parts/${this.props.part.id}`)}} as='h3'> {this.props.part.year + ' ' + this.props.part.make + ' ' + this.props.part.model} </Header>
            <Header as='h4'> {this.props.part.color + ' ' + this.props.part.type} </Header>
            {this.props.removeFromCart ? <Button style={{float: 'right'}} onClick={()=>{this.props.removeFromCart(this.props.inCart.id)}} size='huge' animated='vertical'>
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
            <Segment basic className='price'>
              <Header as='h4'> {'Price:  $' + this.props.part.price} </Header>
            </Segment>
      </Segment>
    );
  }
}

export default PartInCart 
