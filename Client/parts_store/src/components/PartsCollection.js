import React, { Component } from 'react';
import PartCard from './PartCard.js';
import {connect} from 'react-redux'
// import {Segment, Grid} from 'semantic-ui-react'
import '../assets/Collection.css'
 
const mapStateToProps = (state)=>{
    return ({
        parts: state.parts
    })
}

const mapDispatchToProps = {
    partsFetch: () => dispatch => {
        fetch('http://localhost:8000/parts')
        .then(res=>res.json())
        .then(parts=>{
            dispatch({type:'PARTS_FETCH', parts: parts})
        })
    }
}

class PartsCollection extends Component {

    componentDidMount () {
        this.props.partsFetch()
    }

    style = {
        display: 'flex',
        flexWrap: 'wrap',
        width: '1500px',
        margin: 'auto',
        justifyContent: 'center'
    }


    render() {
        return (
        <div style={this.style}>
            {this.props.parts.map((part, key)=>( part.ordered ? null :<PartCard key={key} part={part}/>))}
        </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PartsCollection)
