import updateMovieList from './movie-list';
import updatePlayer from './player';
import updateFilter from './search-filter';
import updatePagination from './pagination';


const reducer = (state, action) => {
    return {
        movies: updateMovieList(state, action),
        player: updatePlayer(state, action),
        filter: updateFilter(state, action),
        pagination: updatePagination(state, action)
    }
}

export default reducer;