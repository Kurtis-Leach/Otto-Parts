import React, { Component } from 'react';
import NavBar from './NavBar'
import { Form, Button, Checkbox, Segment } from 'semantic-ui-react'

export default class Login extends Component {
  render() {
    return (
        <Segment basic> 
                <NavBar/>
                <Form >
                        <Form.Field>
                            <label>Username</label>
                            <input id='username' placeholder='Username' />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type='password' id='password'placeholder='Password' />
                        </Form.Field>
                        <Button type='submit'>Login</Button>
                    </Form>
            </Segment>
    );
  }
}
