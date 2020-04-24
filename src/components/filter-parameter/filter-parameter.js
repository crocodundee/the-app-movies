import React, {Component} from 'react';
import FilterPill from '../filter-pill';
import './filter-parameter.css';


class FilterParameter extends Component{
    constructor(props){
        super(props)
        const {type} = this.props;
        this.state = {
            params:{
                [type]: []
            }
        }
    }

    setParameter = (param) => {
        const {type, setParameter} = this.props;
        const {params} = this.state;
        const {id, checked} = param;
        if(checked){
            var values = [...params[type], id];
        } else {
            values = params[type].filter((p) => p !== id)
        }
        const newParams = {[type]: values}
        this.setState({
            params: newParams
        });
        setParameter({[type]: values.join(',')})
    }

    render(){
        const {title, params, type} = this.props;
        return(
            <div className="parameter">
                <div className="parameter-title">{title}</div>
                <div className="flex-box">
                    {
                        params.map((param) => {
                            return <FilterPill param={param}
                                               key={param.id}
                                               type={type}
                                               setParameter={this.setParameter}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default FilterParameter;