// define your action creator function

//thunk: allows us to reurn a function that takes in dispatch
//insude here we can execute asynch code and once resolved, we can use dispatch to update our store w/ the remote data

export const fetchCats = () => {
    //send a dispatch to indicate we're loading the cats
    return (dispatch) => {
        dispatch({type: 'LOADING_CATS'})
        //call fetch(), dispatching the returned data
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
        //parse the JSON of the response to this request
            .then(resp => {return resp.json()})
        //grabs the actual collection of data
        .then(responseJSON => { dispatch({ type: 'ADD_CATS', cats: responseJSON.images}) })
    }
}