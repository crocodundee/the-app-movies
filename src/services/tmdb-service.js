class TMDbService {
    _api_root = 'https://api.themoviedb.org/3';
    _api_poster_root = 'https://image.tmdb.org/t/p/w500';
    _api_key = '9c84ec4111724ebbb7bb5882d9e9f5fe';
    _youtube_root = 'https://www.youtube.com/watch?v=';
    _no_poster_movie = 'https://media.comicbook.com/files/img/default-movie.png';
    _movies_on_page = 18;

    getResource = async (url, ...tail) => {
        let path = `${this._api_root}${url}?api_key=${this._api_key}&append_to_response=videos`;
        if(tail){
            path = path + '&' + tail.join('&');
        }
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`Could fetch from ${url}, recieved ${response.status}`);
        }
        const body = await response.json();
        return body;
    }

    getMovies = async(page = 1, filter = []) => {
        const searchParams = filter.map((p) => p.value)
        let movies = await this.getResource(
            '/discover/movie',
            `page=${page}`,
            ...searchParams)
        movies = movies.results;
        return this._transformMoviesList(movies);
    }

    getMovie = async (id) => {
        const movie = await this.getResource(`/movie/${id}`);
        return this._transformMovie(movie);
    }

    _get_trailer = (videos) => {
        return videos.filter((video) => video.type === 'Trailer')[0].key
    }

    _transformMovie = (movie) => {
        const trailer = movie.videos.results.length === 0 ? 'GndROuQbqBI': this._get_trailer(movie.videos.results);
        const poster = movie.poster_path ? `${this._api_poster_root}${movie.poster_path}` : this._no_poster_movie;
        return {
            id: movie.id,
            title: movie.original_title,
            genres: movie.genres.map((g) => g.name).join(', '),
            runtime: `${movie.runtime} min`,
            tagline: movie.tagline,
            overview: movie.overview,
            releaseDate: movie.release_date,
            voteAverage: movie.vote_average,
            voteCount: movie.vote_count,
            poster,
            trailer: `${this._youtube_root}${trailer}`
        }
    }

    _transformMoviesList = (movies) => {
        const newMovies = Promise.allSettled(
            movies.map(
                (movie) => this.getMovie(movie.id), this
            )
        ).then((data) => data.map((movie) => {
                        if(movie.status === 'fulfilled'){return movie.value}
                        else{return null}})
                        .filter((movie) => movie !== null)
        ).then((newMovies) => newMovies.slice(0, this._movies_on_page));
        return newMovies;
    }

    getGenres = async () => {
        const genres = await this.getResource('/genre/movie/list');
        return genres;
    }
}

export default TMDbService;
