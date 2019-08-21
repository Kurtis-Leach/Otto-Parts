import React, { Component } from 'react';
import { Segment} from 'semantic-ui-react'
import NavBar from './NavBar'

export default class ProfilePage extends Component {
  render() {
      
    return (
      <Segment >
          <NavBar/>
          <Segment>
              <h1>Profile Page</h1>
          </Segment>
      </Segment>
    );
  }
}
