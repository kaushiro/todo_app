import * as actionTypes from "./actionTypes";
import { ITodo } from "../../context/TodoContext";

export const addTodo = (todo: ITodo) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: todo,
  };
};

export const checkTodo = (id) => {
  return {
    type: actionTypes.CHECK_TODO,
    payload: id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: actionTypes.DELETE_TODO,
    payload: id,
  };
};
