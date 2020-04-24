const updatePagination = (state, action) => {
    if (state === undefined){
        return{
            page: 1
        }
    }

    switch(action.type){
        case 'VIEW_START_PAGE':
            return{
                page: 1
            }
        case 'VIEW_NEXT_PAGE':
            return{
                page: state.pagination.page + 1
            }
        case 'VIEW_PREVIOS_PAGE':
            return{
                page: state.pagination.page - 1
            }
        default:
            return state.pagination
    }
}

export default updatePagination;