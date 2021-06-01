import React from "react";
import { fireEvent, render } from "@testing-library/react";

import { TodoContext, NewTodoDefaultValue } from "../../context/TodoContext";

import AddTodo from "./index";
const dispatchMock = jest.fn();
const ProviderWrapper = ({ children }) => (
  <TodoContext.Provider
    value={{ state: NewTodoDefaultValue, dispatch: dispatchMock }}
  >
    {children}
  </TodoContext.Provider>
);
describe("AddTodo component", () => {
  it("button to add is disabled", () => {
    const { getByTestId } = render(<AddTodo />, {
      wrapper: ProviderWrapper,
    });
    const addButton = getByTestId("button-add-todo");
    expect(addButton).toHaveProperty("disabled", true);
  });
  it("adds items to list after submitting input form", () => {
    const { getByTestId } = render(<AddTodo />, {
      wrapper: ProviderWrapper,
    });
    const input = getByTestId("input-add-todo");
    fireEvent.change(input, { target: { value: "test" } });
    const addButton = getByTestId("button-add-todo");
    fireEvent.click(addButton);
    expect(input).toHaveProperty("value", "");
  });
});
