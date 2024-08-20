import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  // checking navbar bar renders on page with mocked data
  it("renders on page", () => {
    const { getByTestId } = render(<Navbar />);
    const navbar = getByTestId("navbar");

    expect(navbar).toBeInTheDocument();
  });
});
