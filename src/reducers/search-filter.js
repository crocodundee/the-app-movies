const updateParameter = (state, parameter) => {
    const {filter:{search}} = state;
    const paramKey = Object.keys(parameter)[0]
    const paramValue = Object.values(parameter)[0]
    if (paramValue===''){
        return search.filter((p) => p.key !== paramKey)
    }else {
        const old = search.filter((p) => p.key !== paramKey)
        return [
            ...old,
            {key: paramKey, value: `${paramKey}=${paramValue}`}
        ]
    }
}


const updateFilter = (state, action) => {
    if (state === undefined){
        return{
            search: [
                {key: 'sort_by', value: 'sort_by=popularity.desc'},
            ],
            filterState:['popularity.desc'],
            genres:[],
            sort_by:{
                popularity:[
                    {id: 1, name: 'popularity.desc'},
                    {id: 2, name: 'popularity.asc'}
                ],
                revenue: [
                    {id: 1, name: 'revenue.desc'},
                    {id: 2, name: 'revenue.asc'}
                ],
                voteAverage: [
                    {id: 1, name: 'vote_average.desc'},
                    {id: 2, name: 'vote_average.asc'}
                ],
                releaseDate:[
                    {id: 1, name: 'release_date.desc'},
                    {id: 2, name: 'release_date.asc'}
                ]
            }
        }
    }
    switch(action.type){
        case 'FILTER_GET_GENRES':
            return{
                ...state.filter,
                genres: action.payload
            }
        case 'SET_FILTER_PARAMETER':
            return{
                ...state.filter,
                search: updateParameter(state, action.payload),
            }
        default:
            return state.filter
    }
}

export default updateFilter;