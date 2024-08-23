import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  // checking navbar bar renders on page with mocked data
  it("renders on page", () => {
    const { getByTestId } = render(<Button />);
    const button = getByTestId("button");

    expect(button).toBeInTheDocument();
  });
});
