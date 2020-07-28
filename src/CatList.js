// write your CatList component here
import React, { Component } from 'react';

export default class CatList extends Component{


    
    render(){
        const cats = this.props.catPics.map(link => <img src={link.url} alt="another cat"/>)

        return(
            <div>
                {this.props.loading ? <p>Loading...</p> : cats}
            </div>
        )
    }
}