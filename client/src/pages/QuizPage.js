import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { quizActions } from "../components/quiz/quizReducer.js";

import Navbar from "../components/Navbar";
import BackgroundScreen from "../components/BackgroundScreen";
import gridImage from "../images/grid.png";
import MainHeading from "../components/MainHeading";
import Button from "../components/Button";
import AnswerOptions from "../components/quiz/AnswerOptions";
import Question from "../components/quiz/Question";

function QuizPage() {
  const dispatch = useDispatch();
  const activeQuestionIndex = useSelector(
    (state) => state.quiz.activeQuestionIndex,
  );
  const QUESTIONS = useSelector((state) => state.quiz.questions);
  const isFetching = useSelector((state) => state.api.isFetching);
  const score = useSelector((state) => state.quiz.score);

  console.log(QUESTIONS);

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  const lastQuestion = activeQuestionIndex === QUESTIONS.length - 1;
  // const category = 9; //General Knowledge
  // const difficulty = "easy"; // hard coded for now
  // const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;

  // const { data: questions, loading, error } = useFetchedQuestions(url);
  // // const [currentQuestion, setCurrentQuestion] = useState(questions);
  // const [currentQuestionIndex] = useState(0);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  // // console.log(setCurrentQuestion(questions[0]));

  // const currentQuestion = questions[currentQuestionIndex];
  // const lastQuestion = questions[questions.length - 1];

  // if (!currentQuestion) {
  //   return <div>No questions available</div>;
  // }

  // const answers = [
  //   currentQuestion.correct_answer,
  //   ...currentQuestion.incorrect_answers,
  // ].sort();

  // // console.log(questions);
  // // console.log(currentQuestion);
  // // console.log(answers);

  // function handleAnswerClick(answer) {
  //   console.log(answer);
  // }

  function handleNextQuestion() {
    dispatch(quizActions.incrementActiveQuestionIndex());
    dispatch(quizActions.unansweredAnswerState());
  }

  //need to stop it going here until the data has been fetched
  if (quizIsComplete && !isFetching) {
    return (
      <div>
        <h2>Will go to score component</h2>
        <p>{`Your score was ${score}`}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <Navbar />
      <div className="layout-container">
        <BackgroundScreen url={gridImage} />
        {isFetching && <p>Fetching the quiz from the API...</p>};
        {!isFetching && (
          <div className="content">
            <MainHeading
              title={`QUESTION ${activeQuestionIndex + 1}/${QUESTIONS.length}`}
            />
            <Question />
            <div className="answers-container">
              <AnswerOptions key={activeQuestionIndex} />
            </div>
            <Button
              text={lastQuestion ? "Finish" : "Next"}
              onClick={handleNextQuestion}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizPage;
