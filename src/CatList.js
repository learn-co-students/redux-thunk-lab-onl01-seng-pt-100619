import React, { Component } from 'react'

class CatList extends Component {
    renderCats = () => {
		return this.props.catPics.map(pic => {
			return <img key={pic.id} src={pic.url} alt="catPic" />
		})
	}

	render = () => this.renderCats()
  
    render() {
        return (
        <div>
            {this.renderCats()}
        </div>
        )
  }
}

export default CatList