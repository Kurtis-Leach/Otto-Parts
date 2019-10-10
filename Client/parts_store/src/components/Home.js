import React from 'react';
import NavBar from './NavBar'
import {connect} from 'react-redux'
import PartsCollection from './PartsCollection.js'

const mapStateToProps = state => (
    {

    }
)

const mapDispatchToProps = {
    handleClick: () => (
        {type: 'TEST', test:'Success'}
    )
}

function Home (props) {
    return (
        <div>
            <NavBar/>
            <PartsCollection/>
        </div>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)