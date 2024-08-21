import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import { quizActions } from "../components/quiz/quizReducer.js";
import "./QuizPage.css";

import MainHeading from "../components/MainHeading";
import Button from "../components/Button";
import AnswerOptions from "../components/quiz/AnswerOptions";
import Question from "../components/quiz/Question";
import ProgressBar from "../components/ProgressBar.js";

function QuizPage() {
  const dispatch = useDispatch();
  const activeQuestionIndex = useSelector(
    (state) => state.quiz.activeQuestionIndex,
  );
  const QUESTIONS = useSelector((state) => state.quiz.questions);
  const isFetching = useSelector((state) => state.api.isFetching);
  const score = useSelector((state) => state.quiz.score);

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  const lastQuestion = activeQuestionIndex === QUESTIONS.length - 1;

  function handleNextQuestion() {
    dispatch(quizActions.incrementActiveQuestionIndex());
    dispatch(quizActions.unansweredAnswerState());
  }

  if (QUESTIONS.length === 0) {
    return (
      <>
        <Navigate to="/" />
      </>
    );
  }

  if (quizIsComplete && !isFetching) {
    return (
      <div>
        <h2>Will go to score component</h2>
        <p>{`Your score was ${score}`}</p>
      </div>
    );
  }

  //calculation for percentage progress based on number of questions selected
  const progressPercentage =
    ((activeQuestionIndex + 1) / QUESTIONS.length) * 100;

  return (
    <>
      {isFetching && <p>Fetching the quiz from the API...</p>}
      {!isFetching && (
        <div className="content">
          <MainHeading
            title={`QUESTION ${activeQuestionIndex + 1}/${QUESTIONS.length}`}
          />
          <div className="layout">
            <Question />
            <div className="answers-container">
              <AnswerOptions key={activeQuestionIndex} />
            </div>
          </div>
          <ProgressBar progress={progressPercentage} />
          <div className="quiz-link">
            <Button
              text={lastQuestion ? "Finish" : "Next"}
              onClick={handleNextQuestion}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default QuizPage;
