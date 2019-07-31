import React, { Component } from 'react';

// Components
import Prod from './prod';
import Status from './status';

export default class Product extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            prods : [],
            answered: 0,
            correct: 0,
            loaded: 0,
            error: null
        }
    }
    
    render(){
        return(
            <div>
                <Status></Status>
            </div>
        )
    }
}

