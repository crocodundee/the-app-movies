import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {viewNextPage, viewPreviosPage} from "../../actions";

import './pagination.css';

const Pagination = ({loading, page, viewNextPage, viewPreviosPage}) => {
    return (
        <Fragment>
            {loading ? '' :
                <div className="pagination">
                    {
                        page > 1? <button className="btn-round page-button"
                                          onClick={() => viewPreviosPage()}>
                            <i className="fa fa-long-arrow-left prev"></i>
                        </button> : ''
                    }
                    {
                        page < 20? <button className="btn-round page-button"
                                          onClick={() => viewNextPage()}>
                            <i className="fa fa-long-arrow-right next"></i>
                        </button> : ''
                    }
                </div>
            }
        </Fragment>
    )
}

const mapStateToProps = ({movies:{loading}, pagination:{page}}) => {
    return {loading, page}
}

const mapDispatchToProps = {
    viewNextPage, viewPreviosPage
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);