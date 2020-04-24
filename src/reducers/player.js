const getMovie = (movies, id) => {
    return movies.filter((movie) => movie.id === id)[0]
}

const addMovieToPlaylist = (state, id) => {
    const {movies:{movies}, player:{playlist}} = state;
    const movie = getMovie(movies, id);
    if(playlist.indexOf(movie) >= 0){
        return [...playlist]
    }
    return [...playlist, movie];
}

const removeMovieFromPlaylist = (state, id) => {
    const {player:{playlist}} = state;
    return playlist.filter((movie, idx) => idx !== id)
}

const nextMovie = (state) => {
    const {player:{playlist, video: {id}}} = state;
    const nextMovie = id + 1;
    if (playlist.length === nextMovie){ return 0}
    else { return nextMovie}
}

const updatePlayer = (state, action) => {
    if(state === undefined){
        return{
            playlist: [],
            video:{
                id: 0,
                play: false,
            }
        }
    }

    switch(action.type){
        case 'MOVIE_ADDED_TO_PLAYLIST':
            return {
                ...state.player,
                playlist: addMovieToPlaylist(state, action.payload),
            }
        case 'MOVIE_REMOVED_FROM_PLAYLIST':
            return {
                ...state.player,
                playlist: removeMovieFromPlaylist(state, action.payload),
            }
        case 'MOVIE_PLAY':
            return{
                ...state.player,
                video:{
                    id: action.payload,
                    play: true
                }
            }
        case 'MOVIE_PAUSE':
            return{
                ...state.player,
                video:{
                    id: state.player.video.id,
                    play: false
                }
            }
        case 'MOVIE_END':{
            return{
                ...state.player,
                video:{
                    id: nextMovie(state),
                    play: true
                }
            }
        }
        default:
            return state.player;
    }
}

export default updatePlayer;