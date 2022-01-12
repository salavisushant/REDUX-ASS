import {
    ADD_TODO,
    ADD_TODO_ERROR,
    ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    GET_TODO_ERROR,
    GET_TODO_LOADING,
    GET_TODO_SUCCESS,
    REMOVE_TODO,
    TOGGLE_TODO,
  } from './ActionTypes'
  
  export const addTodo = (data) => {
    return {
      type: ADD_TODO,
      payload: data,
    };
  };


  export const addTodoLoading = () => {
    return {
      type: ADD_TODO_LOADING,
      // payload: data,
    };
  };


  export const addTodoSucces = (data) => {
    return {
      type: ADD_TODO_SUCCESS,
      payload: data,
    };
  };


  export const addTodoError = (err) => {
    return {
      type: ADD_TODO_ERROR,
      payload: err,
    };
  };


  export const removeTodo = (id) => {
    return {
      type: REMOVE_TODO,
      id,
    };
  };
  
  export const getTodoLoading = () => {
    return {
      type: GET_TODO_LOADING,
      // payload: data,
    };
  };



  export const getTodoSuccess = (data) => {
    return {
      type: GET_TODO_SUCCESS,
      payload: data,
    };
  };


  export const getTodoError = (err) => {
    return {
      type: GET_TODO_ERROR,
      payload: err,
    };
  };
  


  export const toggleTodoSucces = (id) => {
    return {
      type: TOGGLE_TODO,
      id,
    };
  };
 