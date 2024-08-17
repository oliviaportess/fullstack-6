import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import Question from "./Question";

describe("Questions component", () => {
  test("renders the question when a questions is provided", () => {
    renderWithProviders(<Question />, {
      preloadedState: {
        quiz: {
          activeQuestionIndex: 0,
          questions: [{ question: "Test Question" }],
        },
      },
    });
    expect(screen.getByText("Test Question")).toBeInTheDocument();
  });

  test("renders error message when no question provided", () => {
    renderWithProviders(<Question />, {
      preloadedState: {
        quiz: {
          activeQuestionIndex: 0,
        },
      },
    });
    expect(screen.getByText("Ooops... no question found.")).toBeInTheDocument();
  });

  test("renders error message when question list is empty", () => {
    renderWithProviders(<Question />, {
      preloadedState: {
        quiz: {
          activeQuestionIndex: 0,
          questions: [],
        },
      },
    });
    expect(screen.getByText("Ooops... no question found.")).toBeInTheDocument();
  });
});
