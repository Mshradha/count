import * as types from "./actionTypes";


const getTodoRequest = ()=> {
    return {type : types.GET_TODO_REQUEST};
};
const getTodoSuccess = (payload)=> {
    return {type : types.GET_TODO_SUCCESS,payload};
};
const getTodoFailure = (error)=> {
    return {type : types.GET_TODO_FAILURE,error};
};

export {getTodoSuccess,getTodoFailure,getTodoRequest}