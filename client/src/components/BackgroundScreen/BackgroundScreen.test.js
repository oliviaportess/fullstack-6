import React from "react";
import { render } from "@testing-library/react";
import { useSelector } from "react-redux";
import BackgroundScreen from "./BackgroundScreen";
import entertainmentImage from "../../images/entertainment.png";

// mock useSelector hook from redux
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("Background screen Component", () => {
  it("renders on page", () => {
    // mock the redux state for category
    useSelector.mockReturnValue("10"); // 10 is entertainment

    const { getByTestId } = render(<BackgroundScreen url="defaultImage.png" />);
    const backgroundScreen = getByTestId("background-screen");

    // expect the element to be in the document
    expect(backgroundScreen).toBeInTheDocument();
  });
  it("sets correct background image", () => {
    // mock the redux state for category
    useSelector.mockReturnValue("10"); // 10 is entertainment

    const { getByTestId } = render(<BackgroundScreen url="defaultImage.png" />);
    const backgroundScreen = getByTestId("background-screen");

    // check if the background image is set correctly
    expect(backgroundScreen).toHaveStyle(
      `background-image: url(${entertainmentImage})`,
    );
  });
});
