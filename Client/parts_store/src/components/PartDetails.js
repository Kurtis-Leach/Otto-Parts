import React, { Component } from 'react';
import { Segment, Image, Header, Button, Icon } from 'semantic-ui-react'
import {connect} from 'react-redux'
import NavBar from './NavBar'

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
      console.log('ADDING TO CART')
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
            alert('NOPE')
          }
        })
      })
    }

  render() {
    return (
      <Segment>
        <NavBar/>
        <Segment compact> 
        <Header as='h3'> {this.props.part.year + ' ' + this.props.part.make + ' ' + this.props.part.model} </Header>
          <Header as='h4'> {this.props.part.color + ' ' + this.props.part.type} </Header>
          <Header as='h4'> {'$' + this.props.part.price} </Header>
          <Image src='https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image' size='small' />
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