import { Segment, Image, Header, Button, Icon } from 'semantic-ui-react'
import history from '../history'
import React, { Component } from 'react';


const PartInCart = (props) => {

    const style={
          height: '400px',
          margin: '5px',
          padding: '20px',
          display: 'flex',
          flexWrap: 'wrap',
    }

    const removeButtonStyle={
      float: 'right',
      
    }

    let infoClass = props.removeFromCart ? 'partInfo' : null
    let pictureClass = props.removeFromCart ? 'partImage' : null
    let pictureSize = props.removeFromCart ? 'small' : 'medium'
    let { id, type, color, make, model, year} = props.part
    return (
      <Segment style={style}  > 
        <Segment basic onClick={()=>{history.push(`/parts/${id}`)}} compact className={pictureClass}>
            <Image src='https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image' size={pictureSize} />
        </Segment>
        <Segment basic className={infoClass}>
            <Header onClick={()=>{history.push(`/parts/${id}`)}} as='h3'> {year + ' ' + make + ' ' + model} </Header>
            <Header as='h4'> {color + ' ' + type} </Header>
            <Header as='h4'> {'Price:  $' + props.part.price} </Header>
            {props.removeFromCart ? 
            <Button style={removeButtonStyle} onClick={()=>{props.removeFromCart(props.inCart.id)}} size='huge' animated='vertical'>
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

export default PartInCart 
