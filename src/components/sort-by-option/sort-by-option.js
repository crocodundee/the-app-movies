import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setFilterParameter} from "../../actions";

import './sort-by-option.css';


class SortByOption extends Component{
    state = {
        desc: true,
        option: null
    }


    componentDidUpdate(prevProps, prevState){
        if(this.state.desc !== prevState.desc){
            this.props.setOption({
                sort_by: this.state.option.name
            });
        }
        /*
        if(this.props.active !== prevProps.active){
            if(this.props.active === this.state.option){
                console.log(this.state.option, 'is active!')
            }
        }
        */
    }

    checkOption = () => {
        const {params} = this.props;
        const {desc} = this.state;
        if (desc){
            var option = params.filter((p) => p.id === 2)[0]
        } else {
            option = params.filter((p) => p.id === 1)[0]
        }

        this.setState({
            desc: !this.state.desc,
            option
        })
    }

    render(){
        const {desc} = this.state;
        return(
            <div className="option option-palette"
                 onClick={() => this.checkOption()}>
                {this.props.title} <i className={`fa fa-angle-${desc ? 'down' : 'up'}`}></i>
            </div>
        )
    }
}

/*
const mapStateToProps = ({filter: {search}}) => {
    const sortNamePattern = /\w+[.]\w+/;
    const active = search.filter((p) => p.key === 'sort_by')[0].value.match(sortNamePattern);
    console.log(active)
    return {active}
}
*/

const mapDispatchToProps = (dispatch) => {
    return{
        setOption: (option) => dispatch(setFilterParameter(option))
    }
}

export default connect(null, mapDispatchToProps)(SortByOption);