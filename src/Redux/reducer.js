import * as types from "./actionTypes";


const initalState = {
    todo : [],
    isLoading : false,
    isError : false,
}


const reducer = (state = initalState,action) => {
    const {type,payload} = action ;
    switch (type) {
        case types.GET_TODO_REQUEST :
            return {...state, isLoading:true}
         case types.GET_TODO_SUCCESS :
            return {...state , todo:[...state.todo,payload],isLoading:false}   
          case types.GET_TODO_FAILURE :
            return {...state,isLoading:false,isError:true};
           default:
            return state;   
    }
}


export default reducer