import React, { Component } from 'react';
import NavBar from './NavBar'
import { Form, Button, Checkbox, Segment } from 'semantic-ui-react'
import history from '../history'

const Signup = (props) => {

    const postNewUser = (e) => {
        fetch('http://localhost:8000/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: e.target.firstname.value,
                lastname: e.target.lastname.value,
                username: e.target.username.value,
                password: e.target.password.value
            })
        })
        .then((res)=>res.json())
            .then((res)=>(history.push('/login')))
            .catch((error)=>(error))
    }

        return (
            <Segment basic> 
                <NavBar/>
                <Form onSubmit={(e)=>{postNewUser(e)}}>
                        <Form.Field >
                            <label>First Name</label>
                            <input id='firstname' placeholder='First Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input id='lastname' placeholder='Last Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Username</label>
                            <input id='username' placeholder='Username' />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type='password' id='password'placeholder='Password' />
                        </Form.Field>
                        <Form.Field >
                            <Checkbox label='I agree to the Terms and Conditions' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
            </Segment>
    );
}

export default Signup