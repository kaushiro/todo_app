import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import NavigationItems from "./NavigationItems";

describe("NavigationItems Component", () => {
  const history = createMemoryHistory();
  it("should render one link element", () => {
    const { getByText } = render(
      <Router history={history}>
        <NavigationItems />
      </Router>
    );
    const link = getByText("List");
    expect(link).toBeInTheDocument();
  });
  it("navigates to a link url", () => {
    const { getByText } = render(
      <Router history={history}>
        <NavigationItems />
      </Router>
    );
    const link = getByText("List");
    fireEvent.click(link);
    expect(history.location.pathname).toBe("/todos");
  });
});
