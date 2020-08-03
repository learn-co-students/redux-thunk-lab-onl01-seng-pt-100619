// CatList should iterate over the cat pics and display each cat pic in an image URL.
// look at the catPics collection and determine which property of each catPic object you will use to
// populate your <img> tag and render the image.

//catPic props: id, source_url, url
import React from 'react'
import catsReducer from './reducers/catsReducer'

class CatList extends React.Component {
    // listOfCats = {return this.props.catPics.map(pic => <img key={pic.id} src={cat.url}/>)}
    render(){
        // debugger
        return (
            <div>
                <ul>
                    {this.props.catPics.map(cat => <li><img key={cat.id} src={cat.url} alt={cat.id} /> </li>)}
                </ul>
            </div>
        )
    }
}

export default CatList