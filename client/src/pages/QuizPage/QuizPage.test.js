import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../config/test-utils";
import QuizPage from "./QuizPage";

describe("QuizPage component", () => {
  test("renders the component", () => {
    renderWithProviders(<QuizPage />, {
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
        api: {
          isFetching: false,
        },
      },
    });
    expect(screen.getByText("Test Question")).toBeInTheDocument();
    expect(screen.getByText("Answer A")).toBeInTheDocument();
    expect(screen.getByText("Answer B")).toBeInTheDocument();
    expect(screen.getByText("Answer C")).toBeInTheDocument();
    expect(screen.getByText("Answer D")).toBeInTheDocument();
  });

  test("renders loading message when fetching", () => {
    renderWithProviders(<QuizPage />, {
      preloadedState: {
        api: {
          isFetching: true,
        },
      },
    });
    expect(
      screen.getByText("Fetching the quiz from the API..."),
    ).toBeInTheDocument();
  });

  test("renders the next button when there are further questions", () => {
    renderWithProviders(<QuizPage />, {
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
            {
              question: "Test Question 2",
              correctAnswer: "Answer 1",
              answerOptions: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            },
          ],
          score: 0,
        },
        api: {
          isFetching: false,
        },
      },
    });
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.queryByText("Finish")).not.toBeInTheDocument();
  });

  test("renders the finish button when it's the last question", () => {
    renderWithProviders(<QuizPage />, {
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
        api: {
          isFetching: false,
        },
      },
    });
    expect(screen.queryByText("Next")).not.toBeInTheDocument();
    expect(screen.getByText("Finish")).toBeInTheDocument();
  });

  test("redirects to the score component when the quiz is complete", () => {
    renderWithProviders(<QuizPage />, {
      preloadedState: {
        quiz: {
          activeQuestionIndex: 1,
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
        api: {
          isFetching: false,
        },
      },
    });
    expect(screen.getByText("Will go to score component")).toBeInTheDocument();
  });
});
