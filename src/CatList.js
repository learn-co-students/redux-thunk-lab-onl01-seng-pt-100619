// write your CatList component here
import React, {Component} from 'react'

class CatList extends Component {
    
    render(){
        console.log(this.props.cats)
        return (
            <div> 
                {this.props.catPics.map(cat => <img src={cat.url}/>)}
            </div>
        )
    }

}

export default CatList 