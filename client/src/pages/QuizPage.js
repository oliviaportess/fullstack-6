import React from "react";
import { useState } from "react";
import useFetchedQuestions from "../hooks/useFetchedQuestions";

import Navbar from "../components/Navbar";
import BackgroundScreen from "../components/BackgroundScreen";
import gridImage from "../images/grid.png";
import MainHeading from "../components/MainHeading";
import Button from "../components/Button";
import AnswerOptions from "../components/quiz/AnswerOptions";

// import AnswerButton from "../components/AnswerButton";
// import Question from "../components/quiz/Question";
// import FetchQuestion from "../components/quiz/FetchQuestion";

function QuizPage() {
  const category = 9; //General Knowledge
  const difficulty = "easy"; // hard coded for now
  const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;

  const { data: questions, loading, error } = useFetchedQuestions(url);
  // const [currentQuestion, setCurrentQuestion] = useState(questions);
  const [currentQuestionIndex] = useState(0);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // console.log(setCurrentQuestion(questions[0]));

  const currentQuestion = questions[currentQuestionIndex];
  const lastQuestion = questions[questions.length - 1];

  if (!currentQuestion) {
    return <div>No questions available</div>;
  }

  const answers = [
    currentQuestion.correct_answer,
    ...currentQuestion.incorrect_answers,
  ].sort();

  // console.log(questions);
  // console.log(currentQuestion);
  // console.log(answers);

  function handleAnswerClick(answer) {
    console.log(answer);
  }

  function handleNextQuestion() {}

  return (
    <div className="container">
      <Navbar />
      <div className="layout-container">
        <BackgroundScreen url={gridImage} />
        <div className="content">
          <MainHeading
            title={`${currentQuestionIndex + 1}/${questions.length}`}
          />
          <MainHeading
            className="heading-small"
            title={`${currentQuestion.question}`}
          />
          <div className="answers-container">
            <AnswerOptions answers={answers} onClick={handleAnswerClick} />
          </div>
          <Button
            text={currentQuestion === lastQuestion ? "Finish" : "Next"}
            onClick={handleNextQuestion}
          />
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
