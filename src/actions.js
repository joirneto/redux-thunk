import axios from "axios"

export const loadDataRequest = () =>{
    return{
        type:'LOAD_DATA_REQUEST'
    }
}

export const loadDataSucess = (data) =>{
    return{
        type: 'LOAD_DATA_SUCESS',
        data
    }
}

export const loadDataError = () =>{
    return{
        type: 'LOAD_DATA_ERROR'
    }
}

export const loadData = () =>{
    return dispatch =>{
        dispatch(loadDataRequest())
        axios.get('http://httpbin.org/ip')
        .then(({data}) =>dispatch(loadDataSucess(data)))
        .catch(()=>dispatch(loadDataError()))
    }
}

export const loadUARequest = () =>{
    return{
        type:'LOAD_UA_REQUEST'
    }
}

export const loadUASucess = (data) =>{
    return{
        type: 'LOAD_UA_SUCESS',
        data
    }
}

export const loadUAError = () =>{
    return{
        type: 'LOAD_UA_ERROR'
    }
}

export const loadUA = () =>{
    return dispatch =>{
        dispatch(loadUARequest())
        axios.get('http://httpbin.org/user-agent')
        .then(({data}) =>dispatch(loadUASucess(data)))
        .catch(()=>dispatch(loadUAError()))
    }
}