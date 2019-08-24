import React, { Component } from 'react';
import { Segment} from 'semantic-ui-react'
import NavBar from './NavBar'
import {connect} from 'react-redux'
import Order from './Order';

const mapStateToProps = (state)=>{
  return ({
      orders: state.orders
  })
}

const mapDispatchToProps = {
  ordersFetch: () => dispatch => {
      fetch(`http://localhost:8000/users/token/${localStorage.auth_token}`)
          .then(res=>res.json())
          .then(user=>{
              fetch(`http://localhost:8000/orders/all/${user.id}`)
              .then(res=>res.json())
              .then((orders)=>{
                  dispatch({type: 'ORDERS', orders:orders})
              })
          })
  }
}

class OrdersPage extends Component {
  style = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '1500px',
    margin: 'auto',
    justifyContent: 'center'
}
  componentDidMount(){
    this.props.ordersFetch()
  }
  render() {
    return (
      <Segment >
          <NavBar/>
          <Segment basic style={this.style}>
              {this.props.orders.map((order)=>(<Order order={order}/>))}
          </Segment>
      </Segment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage)