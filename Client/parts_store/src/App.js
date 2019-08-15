import React from 'react';
// import NavBar from './components/NavBar';
import { connect } from 'react-redux'
import { Router } from 'react-router-dom'
import { Route } from 'react-router'
import Home from './components/Home'
import history from './history'

function App() {
    // <div>
    //   <NavBar></NavBar>
    // </div>
  return (
    <Router history={history}>
      <Route exact path='/' component={Home}/>
    </Router>
  );
}

export default App;
