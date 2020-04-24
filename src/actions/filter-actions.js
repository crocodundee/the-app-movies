const setFilterParameter = (parameter) => {
    return{
        type: 'SET_FILTER_PARAMETER',
        payload: parameter
    }
}

const getFilterGenres = (genres) => {
    return {
        type: 'FILTER_GET_GENRES',
        payload: genres
    }
}


const fetchGenres = (dispatch, tmdbService) => {
    return () => {
        tmdbService.getGenres()
            .then((data) => {
                dispatch(getFilterGenres(data.genres))
            })
    }
}

export {
    setFilterParameter,
    getFilterGenres,
    fetchGenres,
}