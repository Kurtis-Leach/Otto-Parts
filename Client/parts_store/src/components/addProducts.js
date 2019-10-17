import React, { Component } from 'react';
import NavBar from './NavBar'
import { Form, Button, Segment } from 'semantic-ui-react'
import history from '../history'

const AddProducts = (props) => {
  const authCheck = (e) => {
    // fetch('http://localhost:8000/login',{
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             username: e.target.username.value,
    //             password: e.target.password.value
    //         })
    //     })
    //     .then((res)=>res.json())
    //         .then((res)=>{
    //           if (res.message !== 'Nope!'){
    //             localStorage.setItem('auth_token', res.auth_token)
    //             history.push('/')
    //           } else {
    //             alert('Incorrect Username or Password')
    //           }
    //         })
    //         .catch((error)=>(error))
    console.log('YEEEEE')
  }
    return (
        <Segment basic> 
                <NavBar/>
                <Form onSubmit={(e)=>{authCheck(e)}} success>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Make' placeholder='Make' />
                        <Form.Input fluid label='Model' placeholder='Model' />
                        <Form.Input fluid label='Year' placeholder='Year' />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Type' placeholder='Type' />
                        <Form.Input fluid label='Color' placeholder='Color' />
                        <Form.Input fluid label='Price' placeholder='Price' />
                    </Form.Group>
                    <Form.Input fluid label='Description' placeholder='Description'/>
                    <Button type='submit'>Create</Button>
                </Form>
        </Segment>
    );
}

export default AddProducts