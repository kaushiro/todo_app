import React from "react";
import { render } from "@testing-library/react";

import Logo from "./Logo";

test("loads Logo", async () => {
  render(<Logo />);
});
