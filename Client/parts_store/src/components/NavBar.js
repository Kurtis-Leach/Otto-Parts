import React from 'react';
import { List, Segment, Input, Image, Dropdown} from 'semantic-ui-react'
import '../assets/NavBar.css'
import logo from '../assets/parts_pricing_icon.png'
import history from '../history'

export default function NavBar () {
                // <List.Item className='listItem'><a className='nav-a' href="#news">News</a></List.Item>  New button 
    return(
        <Segment basic className='mainDiv' >
            <List className='list'>
                <List.Item className='listItem home'>
                        <a className="active nav-a" href="/">
                            <Image src={logo} size='small'/>
                        </a>
                    </List.Item>
                <List.Item className='searchListItem'>
                    <Segment  basic className='searchDiv'>
                        <Input className='inputSearch' action='Search' placholder='Search...'/>
                    </Segment>
                </List.Item>
                <List.Item className='signupListItem'>
                    <Segment basic className='signupSegment'>
                        <Dropdown button text='Login/Sign Up'>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={()=>{history.push('/login')}} text='Login' />
                                <Dropdown.Item onClick={()=>{history.push('/signup')}} text='Sign Up'/>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Segment>
                </List.Item>
            </List>
        </Segment> 
    )
}

