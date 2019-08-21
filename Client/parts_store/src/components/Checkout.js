import React, { Component } from 'react';
import { Segment, Button, Header } from 'semantic-ui-react'
import NavBar from './NavBar.js'
import {connect} from 'react-redux'
import PartInCart from './PartInCart'
import '../assets/Cart.css'
// import history from '../history'

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

    orderMaker() {
        this.props.cart.forEach((inCart)=>{

        })
    }

    render(){
        return(
                <Segment>
                    <NavBar/>
                    <Segment className='cartDiv'>
                        {this.props.cart.length > 0 ? this.props.cart.map((inCart, key)=>(<PartInCart inCart={inCart} key={key} part={inCart.Product}></PartInCart>)) : <Header>You currently have no items in your cart.</Header>}
                    </Segment> 
                        <Button onClick={()=>{this.orderMaker()}} fluid size='large' animated='vertical'>
                            <Button.Content>
                                Place Order
                            </Button.Content> 
                        </Button>                    
                </Segment>
        ) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
