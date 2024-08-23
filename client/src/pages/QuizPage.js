import React, { useEffect } from "react";
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
  const userScore = useSelector((state) => state.quiz.score);
  const name = useSelector((state) => state.quiz.name);

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  const lastQuestion = activeQuestionIndex === QUESTIONS.length - 1;

  function handleNextQuestion() {
    dispatch(quizActions.incrementActiveQuestionIndex());
    dispatch(quizActions.unansweredAnswerState());
  }

  useEffect(() => {
    // using useEffect hook to ensure states are only updated once, not with every render
    if (quizIsComplete && !isFetching) {
      async function sendScore() {
        try {
          const response = await fetch("http://localhost:3001/scoreboard", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: name, score: userScore }),
          });

          const json = await response.json();
          console.log(json);
        } catch (error) {
          console.error("Error submitting score:", error);
        }
      }
      sendScore();
    }
  }, [quizIsComplete, isFetching, name, userScore]);

  if (QUESTIONS.length === 0) {
    return <Navigate to="/" />;
  }

  if (quizIsComplete && !isFetching) {
    return <Navigate to="/scoreboard" />;
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
          <div className="quiz-layout">
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
