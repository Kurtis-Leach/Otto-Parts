import React, { Component } from 'react';
import NavBar from './NavBar'
import { Form, Button, Segment, Label } from 'semantic-ui-react'


const AddProducts = (props) => {
  const createProduct = (e) => {
    fetch('http://localhost:8000/parts',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: e.target.type.value,
                color: e.target.color.value,
                make: e.target.make.value,
                model: e.target.model.value,
                year: e.target.year.value,
                price: e.target.price.value,
                description: e.target.description.value,
                img: null
            })
        })
        .then((res)=>res.json())
            .then((res)=>{
                document.location.reload()
            })
            .catch((error)=>(error))
  }
    return (
        <Segment basic> 
                <NavBar/>
                <Form onSubmit={(e)=>{createProduct(e)}} success>
                    <Form.Group widths='equal'>
                        <Form.Input fluid id='make' label='Make' placeholder='Make' />
                        <Form.Input fluid id='model' label='Model' placeholder='Model' />
                        <Form.Input fluid id='year' label='Year' placeholder='Year' />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input fluid id='type'label='Type' placeholder='Type' />
                        <Form.Input fluid id='color'label='Color' placeholder='Color' />
                        <Form.Input type='number' id='price' label='Price' type='text' placeholder='Amount'>
                            <Label size='big' basic>$</Label>
                            <input />
                            <Label size='big'>.00</Label>
                        </Form.Input>
                    </Form.Group>
                    <Form.Input fluid id='description'label='Description' placeholder='Description'/>
                    <Button type='submit'>Create</Button>
                </Form>
        </Segment>
    );
}

export default AddProducts