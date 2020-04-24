import React, {Component} from 'react';
import './sort-by-filter.css';


class SortByFilter extends Component {
    render() {
        return <div className="sort-by">
            {
                React.Children.map(this.props.children, (child) => {
                    return <div className="sort-by-option">{child}</div>
                })
            }
        </div>
    }
}

export default SortByFilter;