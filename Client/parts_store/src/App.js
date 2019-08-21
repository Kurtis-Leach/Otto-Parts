import React from 'react';
import { Router } from 'react-router-dom'
import { Route } from 'react-router'
import Home from './components/Home'
import history from './history'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import PartDetails from './components/PartDetails.js'
import OrdersPage from './components/OrdersPage'
import Cart from './components/Cart'

function App() {
  return (
    <Router history={history}>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/parts/:id' component={PartDetails}/>
      <Route exact path='/orders' component={OrdersPage}/>
      <Route exact path='/cart' component={()=>(<Cart cartParam={true}/>)}/>
      <Route exact path='/checkout' component={Cart}/>
    </Router>
  );
}

export default App;
