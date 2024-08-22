import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import { quizActions } from "../../components/quiz/quizReducer";
import "./QuizPage.css";

import MainHeading from "../../components/MainHeading/MainHeading";
import Button from "../../components/Button/Button";
import AnswerOptions from "../../components/quiz/AnswerOptions/AnswerOptions";
import Question from "../../components/quiz/Question/Question";
import ProgressBar from "../../components/quiz/ProgressBar/ProgressBar";

function QuizPage() {
  const dispatch = useDispatch();
  const activeQuestionIndex = useSelector(
    (state) => state.quiz.activeQuestionIndex,
  );
  const questions = useSelector((state) => state.quiz.questions);
  const isFetching = useSelector((state) => state.api.isFetching);

  const quizIsComplete = activeQuestionIndex === questions.length;
  const lastQuestion = activeQuestionIndex === questions.length - 1;

  function handleNextQuestion() {
    dispatch(quizActions.incrementActiveQuestionIndex());
    dispatch(quizActions.unansweredAnswerState());
  }

  if (questions.length === 0) {
    return <Navigate to="/" />;
  }

  if (quizIsComplete && !isFetching) {
    return <Navigate to="/scoreboard" state={{ fromLandingPage: true }} />;
  }

  //calculation for percentage progress based on number of questions selected
  const progressPercentage =
    ((activeQuestionIndex + 1) / questions.length) * 100;

  return (
    <>
      {isFetching && <p>Fetching the quiz from the API...</p>}
      {!isFetching && (
        <div className="content">
          <MainHeading
            title={`QUESTION ${activeQuestionIndex + 1}/${questions.length}`}
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
