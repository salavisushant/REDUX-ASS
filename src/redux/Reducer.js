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
  } from "./ActionTypes"; 


  const init = {
    loading: false,
    todos: [],
    error: false,
  };
  
  export const reducer = (state = init, { type, payload }) => {
    switch (type) {
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, payload],
        };
  
      case ADD_TODO_LOADING:
        return {
          ...state,
          loading: true,
        };
  
      case ADD_TODO_SUCCESS:
        return {
          ...state,
          todos: [...state.todos, payload],
          loading: false,
        };
  
      case ADD_TODO_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
      case GET_TODO_LOADING:
        return {
          ...state,
          loading: true,
        };
  
      case GET_TODO_SUCCESS:
        return {
          ...state,
          todos: payload,
          loading: false,
        };
  
      case GET_TODO_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
      case REMOVE_TODO:
        const newtodo = state.todos.filter((e) => e.id !== payload);
        return {
          ...state,
          todo: newtodo,
        };
  
      case TOGGLE_TODO:
        console.log(state);
        return state.todos.map((todo) =>
          todo.id === payload ? { ...todo, completed: !todo.completed } : todo
        );
      default:
        return state;
    }
  };