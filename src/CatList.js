import React, { Component } from 'react';

class CatList extends Component {

  renderCats = () => {
      return this.props.catPics.map(catPic => <li key={catPic.id}><img src={catPic.url} /></li>)
  }
  render() {
    return(
      <ul>
        {this.renderCats()}
      </ul>
    );
  }
};

export default CatList;