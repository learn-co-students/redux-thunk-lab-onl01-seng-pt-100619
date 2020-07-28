// write and export your action creator function here

export function fetchCats() { // this will make an action that is action.fetchCats no need to use default
    return (dispatch) => {
        dispatch({type: 'LOADING_CATS'})
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
            .then(response => {return response.json()})
            .then( cats => {
                // console.log(cats)
                {dispatch({type: 'ADD_CATS', cats: cats.images})}
            })
    }
}