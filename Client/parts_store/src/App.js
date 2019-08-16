import React from 'react';
import { Router } from 'react-router-dom'
import { Route } from 'react-router'
import Home from './components/Home'
import history from './history'
import Login from './components/Login.js'
import Signup from './components/Signup.js'

function App() {
    // <div>
    //   <NavBar></NavBar>
    // </div>
  return (
    <Router history={history}>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={Signup}/>
    </Router>
  );
}

export default App;
