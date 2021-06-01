import React, { useState, createContext, useReducer, useEffect } from "react";

import todoReducer from "../store/reducers/todos";

export interface ITodo {
  id?: number;
  isChecked?: boolean;
  time?: string;
  description?: string;
}
export interface ICounterState {
  todos: ITodo[];
  loading: boolean;
  error: null;
}
export interface IContextModel {
  state: ICounterState;
  dispatch?: React.Dispatch<any>;
}

export const NewTodoDefaultValue: ICounterState = {
  todos: [],
  loading: true,
  error: null,
};

export const TodoContext = createContext({} as IContextModel);

const NewTodoProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, NewTodoDefaultValue);
  const [, setSortedState] = useState(state);

  useEffect(() => {
    const updatedTodos = state.todos.sort((t, f) =>
      f.isChecked === t.isChecked ? 0 : f.isChecked ? -1 : 1
    );
    const updatedState = { todos: updatedTodos, loading: false, error: null };
    setSortedState(updatedState);
  }, [state]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default NewTodoProvider;
