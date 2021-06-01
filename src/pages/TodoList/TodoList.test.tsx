import React from "react";
import { render } from "@testing-library/react";

import { TodoContext, NewTodoDefaultValue } from "../../context/TodoContext";

import TodoList from "./index";
const dispatchMock = jest.fn();
const ProviderWrapper = ({ children }) => (
  <TodoContext.Provider
    value={{ state: NewTodoDefaultValue, dispatch: dispatchMock }}
  >
    {children}
  </TodoContext.Provider>
);
describe("TodoList component", () => {
  it("shows AddTodo component", () => {
    const { getByText } = render(<TodoList />, {
      wrapper: ProviderWrapper,
    });
    getByText("Add Todo Item");
  });
  it("shows no items in list when no list is rendered", () => {
    const { getByText } = render(<TodoList />, {
      wrapper: ProviderWrapper,
    });
    getByText("There are no items in the list");
  });
});
