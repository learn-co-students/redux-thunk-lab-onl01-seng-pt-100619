import React, { Component } from 'react';
import CatList from './CatList';
import {fetchCats} from './actions/catActions';
import {connect} from  'react-redux';

class App extends Component {   

  componentDidMount(){
    this.props.fetchCats()
  }
  
  render() {
    return (
      <div>
        <h1>CatBook</h1>
          <CatList loading={this.props.loading} catPics={this.props.cats}/>
          {/* add CatList component here */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cats: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App)

