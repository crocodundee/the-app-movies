import React, {Component} from 'react';
import {connect} from 'react-redux';
import './filter-pill.css';


class FilterPill extends Component{
    state = {
        checked: false
    }

    componentDidMount(){
        this.isChecked()
    }

    isChecked = () => {
        const pattern = /[0-9]+/g;
        const {type, param, search} = this.props;
        let paramState = search.filter((p) => p.key === type)[0];
        if(paramState) {
            let activeValues = paramState.value.match(pattern).map((p) => parseInt(p));
            const isChecked = activeValues.filter((p) => p === param.id)[0] ? true : false;
            this.setState({checked: isChecked})
        }
    }

    render(){
        const {param, setParameter} = this.props;
        const {checked} = this.state
        const active = checked ? "active": "";
        return(
            <span className={`badge pill option-palette ${active}`}
                  onClick={()=>{
                      const checked = !this.state.checked;
                      setParameter({...param, checked});
                      this.setState({checked});
                  }}>
            {param.name}
            {checked ? <i className="fa fa-times close"></i>: ''}
            </span>
        );
    }
}


const mapStateToProps = ({filter:{search}}) => {
    return {search}
}
/*
const mapDispatchToProps = (dispatch) => {
    return {
        setFilterState: (param) => dispatch(setFilterState(param))
    }
}
*/
export default connect(mapStateToProps)(FilterPill);