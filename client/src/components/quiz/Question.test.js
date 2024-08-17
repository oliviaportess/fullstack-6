import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import Question from "./Question";

test("test Questions component", () => {
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
