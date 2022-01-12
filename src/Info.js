import React from "react"
import { connect } from "react-redux"
import {loadData} from './actions'

export class Info extends React.Component{
    componentDidMount(){
        this.props.loadData()
    }
    render(){
        if(this.props.isFetching){
            return <span>LOADING.... </span>
        }
        if(this.props.error){
            return<span>ERROR</span>
        }
    return <span>MY IP: {this.props.data.origin}</span>
    }
}

const mapStateToProps = (state) =>{
    return{
        isFetching: state.ip.isFetching,
        data:state.ip.data,
        error: state.ip.error
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        loadData: () => dispatch(loadData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Info)