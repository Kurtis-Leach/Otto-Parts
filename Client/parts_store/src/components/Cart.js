import React, { Component } from 'react';
import { Segment, Button, Header } from 'semantic-ui-react'
import NavBar from './NavBar.js'
import {connect} from 'react-redux'
import PartInCart from './PartInCart'
import '../assets/Cart.css'
import history from '../history'

const mapStateToProps = (state)=>{
    return ({
        cart: state.cart
    })
}

const mapDispatchToProps = {
    cartFetch: () => dispatch => {
        fetch(`http://localhost:8000/users/token/${localStorage.auth_token}`)
        .then(res=>res.json())
        .then(user=>{
            fetch(`http://localhost:8000/inCarts/${user.id}`)
            .then(res=>res.json())
            .then((cart)=>{
                dispatch({type:'CURR_CART', cart: cart})
            })
        })
    }
}

class Cart extends Component {
    componentDidMount(){
        this.props.cartFetch()
    }

    removeFromCart = (id) => {
        fetch(`http://localhost:8000/inCarts/${id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                delete: 'delete'
            })
        }).then(()=>{this.props.cartFetch()})
    }

    render(){
        return(
                <Segment>
                    <NavBar/>
                    <Segment className='cartDiv'>
                        {this.props.cart.length > 0 ? this.props.cart.map((inCart, key)=>(<PartInCart removeFromCart={this.removeFromCart} inCart={inCart} key={key} part={inCart.Product}></PartInCart>)) : <Header>You currently have no items in your cart.</Header>}
                    </Segment> 
                    {this.props.cart.length > 0 ? 
                        <Button onClick={()=>{history.push('/checkout')}} fluid size='large' animated='vertical'>
                            <Button.Content>
                                Proceed to Checkout
                            </Button.Content> 
                        </Button>
                        : 
                        <Button onClick={()=>{history.push('/')}} fluid size='large' animated='vertical'>
                            <Button.Content>
                                Add Items to Cart
                            </Button.Content> 
                        </Button>}
                        
                </Segment>
        ) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
