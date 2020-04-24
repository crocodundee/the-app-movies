import React from 'react';
import MovieList from '../movies-list';
import Filter from '../filter';
import Pagination from '../pagination';
import {SortFilter} from '../hoc';


const HomePage = () => {
    return(
        <div className="row">
            <div className="col-8">
                <MovieList/>
                <Pagination/>
            </div>
            <div className="col-4">
                <SortFilter/>
                <Filter/>
            </div>
        </div>
    )
}

export default HomePage;