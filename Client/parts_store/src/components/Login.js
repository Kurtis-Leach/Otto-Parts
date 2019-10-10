import React, { Component } from 'react';
import NavBar from './NavBar'
import { Form, Button, Segment } from 'semantic-ui-react'
import history from '../history'

export default class Login extends Component {
  authCheck = (e) => {
    fetch('http://localhost:8000/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value
            })
        })
        .then((res)=>res.json())
            .then((res)=>{
              if (res.message !== 'Nope!'){
                localStorage.setItem('auth_token', res.auth_token)
                history.push('/')
              } else {
                alert('Incorrect Username or Password')
              }
            })
            .catch((error)=>(error))
  }
  render() {
    return (
        <Segment basic> 
                <NavBar/>
                <Form onSubmit={(e)=>{this.authCheck(e)}}>
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
