import React from "react";
import { render } from "@testing-library/react";
import { useSelector } from "react-redux";
import ProgressBar from "./ProgressBar";

// using jest to mock total number of questions and current question index - test for progress bar without having access to quiz page

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("ProgressBar Component", () => {
  // checking progress bar renders on page with mocked data
  it("renders on page", () => {
    useSelector.mockReturnValue({
      quiz: {
        activeQuestionIndex: 2,
        questions: new Array(10),
      },
    });

    const { getByTestId } = render(<ProgressBar />);
    const progressBar = getByTestId("progress-bar");

    expect(progressBar).toBeInTheDocument();
  });

  // checking progress bar has correct width when rendered with mock data
  it("renders correctly with given progress", () => {
    useSelector.mockReturnValue({
      quiz: {
        activeQuestionIndex: 2,
        questions: new Array(10),
      },
    });

    const expectedProgress = ((2 + 1) / 10) * 100;

    const { getByTestId } = render(<ProgressBar progress={expectedProgress} />);

    const progressBar = getByTestId("progress-bar");
    console.log("ProgressBar width:", progressBar.style.width);

    expect(progressBar.style.width).toBe(`${expectedProgress}%`);
  });
});
