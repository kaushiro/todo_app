import React from "react";
import { render } from "@testing-library/react";

import messages from "./messages";
import Footer, { links } from "./index";

describe("Footer component", () => {
  it("shows Footer App description text", () => {
    const { getByText } = render(<Footer />);
    getByText(messages.appDescription.defaultMessage);
  });
  it("shows Footer text", () => {
    const { getByText } = render(<Footer />);
    links.map((link) => {
      const expectedLink = getByText(link.text);
      expect(expectedLink).toBeInTheDocument();
    });
  });
});
