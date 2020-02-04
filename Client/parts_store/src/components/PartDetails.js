import React, { Component } from 'react';
import { Segment, Image, Header, Button, Icon } from 'semantic-ui-react'
import {connect} from 'react-redux'
import NavBar from './NavBar'
import PlaceholderImg from '../assets/PartPlaceholderImg.png'

const mapStateToProps = (state)=>{
  return ({
      part: state.part
  })
}

const mapDispatchToProps = {
  setPart: (id) => dispatch => {
    fetch(`http://localhost:8000/parts/${id}`)
    .then((res)=>(res.json()))
    .then((part)=>{
      dispatch({type:'SET_CURR_PART', part: part})
    })

  }
}


class PartCard extends Component {

    componentDidMount () {
      this.props.setPart(this.props.match.params.id)
    }

    addToCart = () => {
      
      fetch(`http://localhost:8000/users/token/${localStorage.getItem('auth_token')}`)
      .then((res)=>res.json())
      .then((user)=>{
        console.log(user, 'CURRENT USER')
        fetch('http://localhost:8000/inCarts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userId: user.id,
            productId: this.props.part.id
          })
        }).then((res)=>res.json())
        .then((res)=>{
          if (res.message === 'NOPE'){
            alert('Sorry already in cart')
          }else {
            alert('Added to Cart')
          }
        })
      })
    }

  render() {
    let { type, color, make, model, year, price, description, img} = this.props.part
    if (img === null){
      img=PlaceholderImg
    }
    if (color === 'None'){
      color = ''
    }
    return (
      <Segment basic>
        <NavBar/>
        <Segment style={{left: '40%'}} compact> 
        <Header as='h3'> {year + ' ' + make + ' ' + model} </Header>
          <Header as='h4'> {color + ' ' + type} </Header>
          <Header as='h4'> {'$' + price} </Header>
          <Header as='h4'> {description} </Header>
          <Image src={img} alt={PlaceholderImg} size='large' />
          <Button onClick={this.addToCart} fluid size='tiny' animated='vertical'>
              <Button.Content hidden>
                Add To Cart
              </Button.Content>
              <Button.Content visible>
                <Icon name='shop' />
              </Button.Content>
          </Button>
        </Segment>
      </Segment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PartCard)