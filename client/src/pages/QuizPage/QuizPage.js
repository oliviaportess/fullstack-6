import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import { quizActions } from "../../components/quiz/quizReducer";
import "./QuizPage.css";

import MainHeading from "../../components/MainHeading/MainHeading";
import Button from "../../components/Button/Button";
import AnswerOptions from "../../components/quiz/AnswerOptions/AnswerOptions";
import Question from "../../components/quiz/Question/Question";
import ProgressBar from "../../components/quiz/ProgressBar/ProgressBar";
import BrowserTab from "../../components/BrowserTab";

function QuizPage() {
  const dispatch = useDispatch();
  const activeQuestionIndex = useSelector(
    (state) => state.quiz.activeQuestionIndex,
  );
  const questions = useSelector((state) => state.quiz.questions);
  const isFetching = useSelector((state) => state.api.isFetching);
  const userScore = useSelector((state) => state.quiz.score);
  const name = useSelector((state) => state.quiz.name);

  const quizIsComplete = activeQuestionIndex === questions.length;
  const lastQuestion = activeQuestionIndex === questions.length - 1;

  function handleNextQuestion() {
    dispatch(quizActions.incrementActiveQuestionIndex());
    dispatch(quizActions.unansweredAnswerState());
  }

  const sendScore = useCallback(
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
        console.log(json.message);
      } catch (error) {
        console.error("Error submitting score:", error);
      }
    },
    [name, userScore],
  );

  useEffect(() => {
    // using useEffect hook to ensure the sendScore function is only ran once, not with every render
    if (quizIsComplete && !isFetching) {
      sendScore();
    }
  }, [isFetching, quizIsComplete, sendScore]);

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
      <BrowserTab title="Triviago" />
      {isFetching && <p>Fetching the quiz from the API...</p>}
      {!isFetching && (
        <div className="content">
          <MainHeading
            title={`QUESTION ${activeQuestionIndex + 1}/${questions.length}`}
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
