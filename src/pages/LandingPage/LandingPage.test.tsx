import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import messages from "./messages";
import LandingPage from "./index";

describe("LandingPage component", () => {
  const history = createMemoryHistory();
  it("shows Footer App description and title", () => {
    const { getByText } = render(<LandingPage />);
    getByText(messages.title.defaultMessage);
    getByText(messages.description.defaultMessage);
  });
  it("shows Get started button and navigates to List page", () => {
    const { getByTestId } = render(
      <Router history={history}>
        <LandingPage />
      </Router>
    );
    const getStartedButton = getByTestId("button-get-started");
    expect(getStartedButton).toBeInTheDocument();
    fireEvent.click(getStartedButton);
    expect(history.location.pathname).toBe("/todos");
  });
});
