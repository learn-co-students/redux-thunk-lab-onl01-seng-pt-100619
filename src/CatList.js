import React, { Component } from 'react'

export default class CatList extends Component {
    
    renderCats = () => {
        return this.props.catPics.map(cat => <img src={cat.url} alt={cat.url}/>) 
    }
    
    render() {
        return (
            <div>
                <ul>
                 {this.renderCats()}
               </ul>
            </div>
        )
    }
}
