import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {compose} from '../../utils';
import {withTMDbService} from '../hoc';
import {fetchGenres, setFilterParameter} from "../../actions";
import FilterParameter from '../filter-parameter';
import './filter.css'


class Filter extends Component{

    componentDidMount(){
        this.props.fetchGenres()
    }

    render(){
        return(
            <Fragment>
                <FilterParameter title="Genres"
                                 params={this.props.genres}
                                 type='with_genres'
                                 setParameter={this.props.setParameter}/>
            </Fragment>
        );
    }
}

const mapStateToProps = ({filter: {genres}}) => {
    return {genres}
}

const mapDispatchToProps = (dispatch, {tmdbService}) => {
    return {
        fetchGenres: fetchGenres(dispatch, tmdbService),
        setParameter: (param) => dispatch(setFilterParameter(param))
    }
}

export default compose(
    withTMDbService(),
    connect(mapStateToProps, mapDispatchToProps),
)(Filter);