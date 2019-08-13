import React from 'react';
import { List, Segment, Input } from 'semantic-ui-react'
import '../assets/NavBar.css'

export default function NavBar () {
    return(
        <Segment>
            <List class='list'>
                <List.Item class='listItem'><a class="active" href="#home">Home</a></List.Item>
                <List.Item class='listItem'><a href="#news">News</a></List.Item>
                <List.Item class='listItem'>
                    <Segment>
                        <Input action='Search' placholder='Search...'/>
                    </Segment>
                </List.Item>
            </List>
        </Segment>
    )
}