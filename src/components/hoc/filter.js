import React from 'react';
import Filter from '../filter';
import FilterParameter from '../filter-parameter';
import {setFilterParameter} from "../../actions";
import {connect} from 'react-redux';


const MainFilter = ({genres, setParameter}) => {
    return(
        <Filter>
            <FilterParameter title="Genres" params={genres} type='with_genres' setParameter={setParameter}/>
        </Filter>
    )
}


const mapStateToProps = ({filter: {genres}}) => {
    return {genres}
}

const mapDispatchToProps = (dispatch) => {
    return {
        setParameter: (param) => dispatch(setFilterParameter(param))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainFilter);