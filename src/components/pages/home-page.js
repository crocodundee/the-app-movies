import React from 'react';
import MovieList from '../movies-list';
import Filter from '../filter';
import Pagination from '../pagination';
import {SortFilter} from '../hoc';


const HomePage = () => {
    return(
        <div className="row">
            <div className="col-md-8 col-sm-12 order-md-1 order-sm-2 order-2">
                <MovieList/>
                <Pagination/>
            </div>
            <div className="col-md-4 col-sm-12 order-md-2 order-sm-1 order-1">
                <SortFilter/>
                <Filter/>
            </div>
        </div>
    )
}

export default HomePage;