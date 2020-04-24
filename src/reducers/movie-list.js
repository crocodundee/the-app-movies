const updateMovieList = (state, action) => {
    if(state === undefined){
        return {
            movies:[],
            loading: true,
            error: null,
        }
    }

    switch(action.type){
        case 'FETCH_MOVIE_REQUEST':
            return {
                movies: [],
                loading: true,
                error: null
            }
        case 'FETCH_MOVIE_SUCCESS':
            return {
                movies: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_MOVIE_FAILURE':
            return {
                movies: [],
                loading: false,
                error: action.payload
            }
        default:
            return state.movies;
    }
}

export default updateMovieList;