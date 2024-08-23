import React from "react";
import { render } from "@testing-library/react";
import BackgroundScreen from "./BackgroundScreen";

describe("Background screen Component", () => {
  // checking navbar bar renders on page with mocked data
  it("renders on page", () => {
    const { getByTestId } = render(<BackgroundScreen />);
    const backgroundScreen = getByTestId("background-screen");

    expect(backgroundScreen).toBeInTheDocument();
  });
});
