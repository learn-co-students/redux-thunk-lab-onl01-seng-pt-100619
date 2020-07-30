// add the catsReducer

const catsReducer = (state = { cats: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_CATS':
        return {
          ...state,
          cats: [...state.cats],
          loading: true
        }
      case 'ADD_CATS':
        return {
          ...state,
          cats: action.cats,
          loading: false
        }
      default:
        return state;
    }
  }

  export const fetchCats = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_CATS'})
      fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
      })
    }
  }
   
  export default catsReducer;