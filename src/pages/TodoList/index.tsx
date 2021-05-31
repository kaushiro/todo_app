import React, { useState, useContext, useEffect } from "react";

import List from "../../components/List";
import { TodoContext } from "../../context/TodoContext";
import AddTodo from "../AddTodo";

import { MainContentWrapperStyled } from "./styles";
import messages from "./messages";

const TodoList: React.FC = () => {
  const {
    state: { todos },
  } = useContext(TodoContext);

  return (
    <MainContentWrapperStyled>
      <AddTodo />
      {todos.length > 0 ? (
        <List list={todos} />
      ) : (
        <p>{messages.noTodos.defaultMessage}</p>
      )}
    </MainContentWrapperStyled>
  );
};

export default TodoList;
