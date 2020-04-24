import React from 'react';
import './movie-item.css';


const MovieItem = ({movie, addMovieToPlaylist}) => {
    const {title, poster, voteAverage, genres} = movie;
    return(
        <div className="movie-card-wrap">
            <div className="card movie-card">
                <img className="card-img" src={poster} alt={title}/>
                    <div className="card-img-overlay">
                        <div className="movie-details flex-box">
                            <div className="movie-rating">{voteAverage}</div>
                            <div className="movie-watch"
                                onClick={addMovieToPlaylist}>
                                <i className="fa fa-bookmark"></i>
                            </div>
                        </div>
                    </div>

            </div>
            <div className="movie-title">
                <p className="title">{title}</p>
                <p className="genre">{genres}</p>
            </div>
        </div>
    )
}


export default MovieItem;