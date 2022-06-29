import React, { useEffect } from 'react'
import { getTodoRequest } from '../Redux/action'
import Todoinput from './Todoinput'
import {useDispatch} from 'react-redux'

const Todo = () => {
    const dispatch = useDispatch();
     const getTodos = ()=> {
        const requestAction = getTodoRequest();
        dispatch(requestAction);
     }
    useEffect(()=>{
        getTodos();
    },[])

  return (
    <div>
        <h1>Todo</h1>
        <Todoinput/>
    </div>
  )
}

export default Todo