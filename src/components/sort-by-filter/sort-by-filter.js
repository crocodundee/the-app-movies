import React, {Component} from 'react';
import './sort-by-filter.css';


class SortByFilter extends Component {
    render() {
        return <div className="sort-by row row-cols-2 row-cols-sm-4 row-cols-md-1 row-cols-lg-2 no-gutters">
            {
                React.Children.map(this.props.children, (child) => {
                    return <div className="col">{child}</div>
                })
            }
        </div>
    }
}

export default SortByFilter;