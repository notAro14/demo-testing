import { test } from "vitest";

import Hello from "./hello";
import { render, screen } from "../test/utils";

test("should sum two positive numbers", () => {
  render(<Hello />);
  screen.debug();
});
