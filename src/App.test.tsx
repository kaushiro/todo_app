// app.test.js
import React from "react";
import { Router } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";

import App from "./App";

describe("full app rendering/navigating", () => {
  const history = createMemoryHistory();
  it("is on landing page", () => {
    const { getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    const landingTitle = getByText(/Kim's Todo List/i);
    expect(landingTitle).toBeInTheDocument();
  });
  it("navigates to a different page", () => {
    const { getByTestId, getAllByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    const listLink = getAllByText("List")[0];
    fireEvent.click(listLink);
    const addButton = getByTestId("button-add-todo");
    expect(addButton).toBeInTheDocument();
  });
  it("redirects to landing page on a bad url", () => {
    const { getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    history.push("/some/bad/route");
    const landingTitle = getByText(/Kim's Todo List/i);
    expect(landingTitle).toBeInTheDocument();
  });
});
