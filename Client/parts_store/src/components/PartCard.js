import React, { Component } from 'react';
import { Segment, Image, Header, Button, Icon } from 'semantic-ui-react'
import history from '../history'

const PartCard = (props) => {
  const style={
    borderStyle: 'solid',
        borderWidth: '5px',
        margin: '5px',
        padding: '20px',
        alignItems: 'center'
  }
  const addToCart = () => {
    console.log('ADDING TO CART')
    fetch(`http://localhost:8000/users/token/${localStorage.getItem('auth_token')}`)
    .then((res)=>res.json())
    .then((user)=>{
      fetch('http://localhost:8000/inCarts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: user.id,
          productId: props.part.id
        })
      }).then((res)=>res.json())
      .then((res)=>{
        if (res.message === 'NOPE'){
          alert('NOPE')
        }
      })
    })
  }

    let { id, type, color, make, model, year} = props.part
    if (color === 'None'){
      color = ''
    }
    return (
      <Segment style={style} compact > 
        <Segment basic compact onClick={()=>{history.push(`/parts/${id}`)}}>
          <Header as='h3'> {year + ' ' + make + ' ' + model} </Header>
          <Header as='h4'> {color + ' ' + type} </Header>
          <Image src='https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image' size='small' />
        </Segment>
        <Button onClick={()=>{addToCart()}}fluid size='tiny' animated='vertical'>
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

export default PartCard
