import React from "react";
import { render } from "@testing-library/react";
import MainHeading from "./MainHeading";

describe("Main heading Component", () => {
  // checking navbar bar renders on page with mocked data
  it("renders on page", () => {
    const { getByTestId } = render(<MainHeading />);
    const mainHeading = getByTestId("main-heading");

    expect(mainHeading).toBeInTheDocument();
  });
});
