import {
    fetchMovies, movieAddedToPlaylist, movieRemovedFromPlaylist,
    moviePlay, moviePause, movieEnd
} from './movies-actions';

import {
    setFilterParameter, getFilterGenres, fetchGenres,
} from './filter-actions';

import {
    viewNextPage, viewPreviosPage, viewStartPage
} from "./pagination-actions";




export {
    fetchMovies, movieAddedToPlaylist, movieRemovedFromPlaylist,
    moviePlay, moviePause, movieEnd,

    setFilterParameter, getFilterGenres, fetchGenres,

    viewNextPage, viewPreviosPage, viewStartPage
}