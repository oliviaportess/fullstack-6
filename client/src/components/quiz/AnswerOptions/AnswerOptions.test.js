import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../../../test-utils";
import AnswerOptions from "./AnswerOptions";

describe("AnswerButton component", () => {
  test("renders the component", () => {
    renderWithProviders(<AnswerOptions />, {
      preloadedState: {
        quiz: {
          activeQuestionIndex: 0,
          userAnswers: [],
          selectedAnswer: "",
          answerState: "",
          questions: [
            {
              question: "Test Question",
              correctAnswer: "Answer A",
              answerOptions: ["Answer A", "Answer B", "Answer C", "Answer D"],
            },
          ],
          score: 0,
        },
      },
    });
    expect(screen.getByText("Answer A")).toBeInTheDocument();
    expect(screen.getByText("Answer B")).toBeInTheDocument();
    expect(screen.getByText("Answer C")).toBeInTheDocument();
    expect(screen.getByText("Answer D")).toBeInTheDocument();
  });

  test("when no answer has been selected, no answers are highlighted", () => {
    renderWithProviders(<AnswerOptions />, {
      preloadedState: {
        quiz: {
          activeQuestionIndex: 0,
          userAnswers: [],
          selectedAnswer: "",
          answerState: "",
          questions: [
            {
              question: "Test Question",
              correctAnswer: "Answer A",
              answerOptions: ["Answer A"],
            },
          ],
          score: 0,
        },
      },
    });
    expect(screen.getByText("Answer A")).not.toHaveClass("correct");
    expect(screen.getByText("Answer A")).not.toHaveClass("wrong");
  });

  test("when correct answer has been selected, answer is highlighted as correct", () => {
    renderWithProviders(<AnswerOptions />, {
      preloadedState: {
        quiz: {
          activeQuestionIndex: 0,
          userAnswers: [],
          selectedAnswer: "Answer A",
          answerState: "",
          questions: [
            {
              question: "Test Question",
              correctAnswer: "Answer A",
              answerOptions: ["Answer A", "Answer B"],
            },
          ],
          score: 0,
        },
      },
    });

    fireEvent(
      screen.getByText("Answer A"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(screen.getByText("Answer A")).toHaveClass("correct");
    expect(screen.getByText("Answer A")).not.toHaveClass("wrong");
    expect(screen.getByText("Answer B")).not.toHaveClass("correct");
    expect(screen.getByText("Answer B")).not.toHaveClass("wrong");
  });

  test("when incorrect answer has been selected, answer is highlighted as incorrect", () => {
    renderWithProviders(<AnswerOptions />, {
      preloadedState: {
        quiz: {
          activeQuestionIndex: 0,
          userAnswers: [],
          selectedAnswer: "Answer A",
          answerState: "",
          questions: [
            {
              question: "Test Question",
              correctAnswer: "Answer A",
              answerOptions: ["Answer A", "Answer B"],
            },
          ],
          score: 0,
        },
      },
    });

    fireEvent(
      screen.getByText("Answer B"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(screen.getByText("Answer A")).not.toHaveClass("correct");
    expect(screen.getByText("Answer A")).not.toHaveClass("wrong");
    expect(screen.getByText("Answer B")).not.toHaveClass("correct");
    expect(screen.getByText("Answer B")).toHaveClass("wrong");
  });

  test("renders nothing when no answers are provided", () => {
    renderWithProviders(<AnswerOptions />, {
      preloadedState: {
        quiz: {
          activeQuestionIndex: 0,
          userAnswers: [],
          selectedAnswer: "",
          answerState: "",
          questions: [
            {
              question: "",
              correctAnswer: "",
              answerOptions: [],
            },
          ],
          score: 0,
        },
      },
    });
    expect(document.getElementById("answers").childNodes).toHaveLength(0);
  });
});
