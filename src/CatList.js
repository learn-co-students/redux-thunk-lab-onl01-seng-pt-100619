import React, { Component } from 'react';

class CatList extends Component {

    cats = () => {
        return this.props.catPics.map(pic =><img key={pic.id} src={pic.url} />)
    }

    render() {
        return (
            <div>
                {this.cats()}
            </div>
        )
    }
}

export default CatList