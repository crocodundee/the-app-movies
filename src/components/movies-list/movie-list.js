import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withTMDbService} from '../hoc';
import {compose} from '../../utils';
import {fetchMovies, movieAddedToPlaylist, viewStartPage} from "../../actions";

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import MovieItem from '../movie-item';
import './movie-list.css';


class MovieList extends Component{
    componentDidMount(){
        this.loadMovies();
    }

    componentDidUpdate(prevProps){
        if(this.props.search !== prevProps.search){
            this.loadMovies()
            this.props.viewStartPage()
        }
        if(this.props.page !== prevProps.page){
            this.loadMovies()
        }
    }

    loadMovies = () => {
        const {page, search} = this.props;
        this.props.fetchMovies(page, search)
    }

    render(){
        const {movies, loading, error, addMovieToPlaylist} = this.props;
        if(error){
            return <ErrorIndicator/>
        }
        if(loading){
            return <Spinner/>
        }
        return (
            <ul className="movie-list flex-box">
                {
                    movies.map((movie) => {
                        return <li key={movie.id}>
                            <MovieItem movie={movie}
                                       addMovieToPlaylist={() => addMovieToPlaylist(movie.id)}/>
                        </li>
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({movies: {movies, loading, error},
                             filter:{search},
                             pagination: {page}}) => {
    return {
        movies, loading, error,
        search, page
    }
}

const mapDispatchToProps = (dispatch, {tmdbService}) => {
    return {
        fetchMovies:(page, params) => fetchMovies(tmdbService, dispatch)(page, params),
        addMovieToPlaylist: (id) => dispatch(movieAddedToPlaylist(id)),
        viewStartPage: () => dispatch(viewStartPage()),
    }
}

export default compose(
    withTMDbService(),
    connect(mapStateToProps, mapDispatchToProps)
)(MovieList);