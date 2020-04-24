import {bindActionCreators} from 'redux';

const moviesRequested = () => {
    return {
        type: 'FETCH_MOVIE_REQUEST',
    }
}

const moviesLoaded = (movies) => {
    return {
        type: 'FETCH_MOVIE_SUCCESS',
        payload: movies,
    }
}

const moviesFailure = (error) => {
    return {
        type: 'FETCH_MOVIE_SUCCESS',
        payload: error,
    }
}

const movieAddedToPlaylist = (id) => {
    return {
        type: 'MOVIE_ADDED_TO_PLAYLIST',
        payload: id
    }
}

const movieRemovedFromPlaylist = (id) => {
    return {
        type: 'MOVIE_REMOVED_FROM_PLAYLIST',
        payload: id
    }
}

const moviePlay = (id) => {
    return {
        type: 'MOVIE_PLAY',
        payload: id
    }
}

const moviePause = () => {
    return 'MOVIE_PAUSE'
}

const movieEnd = () => {
    return 'MOVIE_END'
}


const actions = {moviesRequested, moviesLoaded, moviesFailure}

const fetchMovies = (service, dispatch) => (page, filter) => {
    const {moviesRequested, moviesLoaded, moviesFailure} = bindActionCreators(actions, dispatch);
    moviesRequested();
    service.getMovies(page, filter)
        .then((movies) => moviesLoaded(movies))
        .catch((error) => moviesFailure(error))
}

export {
    fetchMovies,
    movieAddedToPlaylist,
    movieRemovedFromPlaylist,
    moviePlay, moviePause, movieEnd
}