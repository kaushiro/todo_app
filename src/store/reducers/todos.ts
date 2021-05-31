import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";
import { ICounterState } from "../../context/TodoContext";

const initialState: ICounterState = {
  todos: [],
  loading: false,
  error: null,
};

const addTodo = (state, action) => {
  // console.log(action);
  return updateObject(state, {
    todos: [...state.todos, action.payload],
  });
};

const checkTodo = (state, action) => {
  return updateObject(state, {
    todos: [
      ...state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isChecked: !todo.isChecked }
          : todo
      ),
    ],
  });
};

const deleteTodo = (state, action) => {
  return updateObject(state, {
    todos: state.todos.filter((todo) => todo.id !== action.payload),
  });
};

const reducer = (state = initialState, action: any): ICounterState => {
  switch (action.type) {
    case actionTypes.ADD_TODO: {
      return addTodo(state, action);
    }
    case actionTypes.CHECK_TODO:
      return checkTodo(state, action);

    case actionTypes.DELETE_TODO: {
      return deleteTodo(state, action);
    }
    default:
      return state;
  }
};
export default reducer;
