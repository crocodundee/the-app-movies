import React from 'react';
import {connect} from 'react-redux';
import SortByFilter from '../sort-by-filter';
import SortByOption from '../sort-by-option';


const SortFilter = (props) => {
    return(
        <SortByFilter>
            <SortByOption title="Popularity" params={props.sort_by.popularity}/>
            <SortByOption title="Rating" params={props.sort_by.voteAverage}/>
            <SortByOption title="Revenue" params={props.sort_by.revenue}/>
            <SortByOption title="Release date" params={props.sort_by.releaseDate}/>
        </SortByFilter>
    )
}

const mapStateToProps = ({filter:{sort_by}}) => {
    return {sort_by}
}

export default connect(mapStateToProps)(SortFilter);