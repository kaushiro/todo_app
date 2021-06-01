/* eslint-disable testing-library/await-async-utils */
import React from "react";
import {
  fireEvent,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import { TodoContext } from "../../context/TodoContext";

import List from "./index";

const stubbedList = {
  todos: [
    {
      id: 0,
      isChecked: false,
      time: "21:30:20",
      description: "test desciption one",
    },
    {
      id: 1,
      isChecked: false,
      time: "21:30:21",
      description: "test desciption two",
    },
    {
      id: 2,
      isChecked: false,
      time: "21:30:22",
      description: "test desciption three",
    },
  ],
};
const dispatchMock = jest.fn();
const ProviderWrapper = ({ children }) => (
  <TodoContext.Provider value={{ dispatch: dispatchMock }}>
    {children}
  </TodoContext.Provider>
);
describe("List component", () => {
  it("shows all list items", () => {
    const { getByText } = render(<List list={stubbedList.todos} />);
    getByText(
      `${stubbedList.todos[0].description} created: ${stubbedList.todos[0].time}`
    );
    getByText(
      `${stubbedList.todos[1].description} created: ${stubbedList.todos[1].time}`
    );
    getByText(
      `${stubbedList.todos[2].description} created: ${stubbedList.todos[2].time}`
    );
  });

  it("shows checkbox check and text strikethrough", () => {
    const { getByTestId, getByText } = render(
      <List list={stubbedList.todos} />,
      { wrapper: ProviderWrapper }
    );
    const checkbox = getByTestId("completion-checkbox-0");
    const div = getByText(
      `${stubbedList.todos[0].description} created: ${stubbedList.todos[0].time}`
    );
    expect(checkbox).toHaveProperty("checked", false);
    fireEvent.click(checkbox);
    expect(div).toHaveStyle("text-decoration: line-through");
  });

  it("deletes item when delete button is pushed", () => {
    const { getByTestId, getByText } = render(
      <List list={stubbedList.todos} />,
      { wrapper: ProviderWrapper }
    );
    getByText(
      `${stubbedList.todos[0].description} created: ${stubbedList.todos[0].time}`
    );
    const deleteButton = getByTestId("button-delete-0");
    fireEvent.click(deleteButton);
    // eslint-disable-next-line jest/valid-expect-in-promise
    waitForElementToBeRemoved(
      getByText(
        `${stubbedList.todos[0].description} created: ${stubbedList.todos[0].time}`
      )
    ).catch((err) => console.log(err));
  });
});
