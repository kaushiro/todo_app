import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import NavigationItem from "./NavigationItem";

const stubbedProps = {
  link: "/todos",
  children: "Test text",
  testId: "test",
};
describe("NavigationItems Component", () => {
  const history = createMemoryHistory();
  // const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };
  history.push = jest.fn();
  it("should render link with correct props", () => {
    const { getByTestId } = render(
      <Router history={history}>
        <NavigationItem link={stubbedProps.link} testId={stubbedProps.testId}>
          {stubbedProps.children}
        </NavigationItem>
      </Router>
    );
    const link = getByTestId("link-test");
    expect(link).toBeInTheDocument();
  });
});
