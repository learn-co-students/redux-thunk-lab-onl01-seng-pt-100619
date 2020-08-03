import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchCats} from './actions/catActions'
import CatList from './CatList'

class App extends Component {   
  //componenetDidMount() will ALWAYS be called automatically, when the component is mounting for the first time. 
  // this is the perfect place to go and get the cat pics
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }
  
  render() {
    // debugger
    console.log(this.props.catPics)
    return (
      <div className="App">
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}

//this.props.catPics
const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

//we write this out to make sure fetchCats() is available  and we can access it in componentDidMount()
const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App)

