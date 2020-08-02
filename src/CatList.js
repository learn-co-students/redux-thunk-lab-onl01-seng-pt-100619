import React, { Component } from 'react';

class CatList extends Component {
    render(){
        const {catPics} = this.props
    const renderCats = catPics.map(cat => <li key={cat.id}><img src={cat.url} /></li>)
        return (
            <ul>
                {renderCats}
            </ul>
        )
    }
}
export default CatList