import React, { Component } from 'react';
import PartCard from './PartCard.js';
import {connect} from 'react-redux'
// import {Segment, Grid} from 'semantic-ui-react'
import '../assets/Collection.css'
 
const mapStateToProps = (state)=>{
    return ({
        parts: state.parts,
        searchTerm: state.searchTerm
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
        width: '1000px',
        margin: 'auto',
        justifyContent: 'center',
        flexDirection: 'row',
    }


    render() {

        let filteredItems =[]
        let parts = this.props.parts.map((part)=>({part: part, attr: `${part.type} ${part.color} ${part.make} ${part.model} ${part.year}`}))
        let searchTerm = this.props.searchTerm.split(' ')
        parts = parts.map((part)=>{
            return {part: part.part, attr: part.attr.split(' ')}
        })
        filteredItems = parts.filter((part)=>{
            let searchTerms = [ ...searchTerm ]
            let bool = false
            part.attr.forEach((attr)=>{
                searchTerms.forEach((term)=>{
                    if(term === ''){
                        searchTerms = searchTerms.filter( searchTerm => searchTerm != term)
                    } else if (attr.includes(term) === true){
                        searchTerms = searchTerms.filter( searchTerm => searchTerm != term)
                    }
                })
            })
           if(searchTerms.length === 0){
                bool = true
            }
            return bool
        })

        return (
        <div style={this.style}>
            {filteredItems.map((part, key)=>( part.part.ordered ? null :<PartCard key={key} part={part.part}/>))}
        </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PartsCollection)
