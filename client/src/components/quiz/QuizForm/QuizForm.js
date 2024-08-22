import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { quizFormActions } from "./quizFormReducer";
import { quizActions } from "../quizReducer";
import { apiActions } from "../apiReducer";

import "./QuizForm.css";
import Button from "../../Button/Button";

let apiMessage;

function QuizForm({ text }) {
  const numberOfQuestions = useSelector(
    (state) => state.quizForm.numberOfQuestions,
  );
  const category = useSelector((state) => state.quizForm.category);
  const difficulty = useSelector((state) => state.quizForm.difficulty);
  const type = useSelector((state) => state.quizForm.type);
  const dispatch = useDispatch();

  const handleNumberChange = (event) => {
    dispatch(quizFormActions.setNumberOfQuestions(event.target.value));
  };

  const handleCategoryChange = (event) => {
    dispatch(quizFormActions.setCategory(event.target.value));
  };

  const handleDifficultyChange = (event) => {
    dispatch(quizFormActions.setDifficulty(event.target.value));
  };

  const handleTypeChange = (event) => {
    dispatch(quizFormActions.setType(event.target.value));
  };

  const isWaiting = useSelector((state) => state.api.isWaiting);

  async function handleSubmit(event) {
    event.preventDefault();

    if (isWaiting) {
      return;
    }

    const quizSettings = {
      numberOfQuestions,
      category: category === "any" ? "" : category,
      difficulty: difficulty === "any" ? "" : difficulty,
      type: type === "any" ? "" : type,
    };

    dispatch(quizActions.reset());

    try {
      dispatch(apiActions.trueIsFetching());
      dispatch(apiActions.trueIsWaiting());
      const response = await fetch("/api/searchWithInput", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quizSettings }),
      });
      const jsonResponse = await response.json();
      if (jsonResponse.length === 0) {
        // Added this in as in case the api can't fulfil user's request
        apiMessage =
          "Sorry, not enough questions in that category/difficulty. Please broaden search.";
      }
      dispatch(quizActions.saveQuestions(jsonResponse));
      dispatch(apiActions.falseIsFetching());
      setTimeout(() => {
        dispatch(apiActions.falseIsWaiting());
      }, 5000);
      console.log("Response from backend:", jsonResponse);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  return (
    <form>
      <div id="quiz-form">
        <label htmlFor="quiz-amount" className="quiz-label">
          No. of Questions
        </label>
        <input
          type="number"
          id="quiz-amount"
          min="5"
          max="20"
          placeholder="10"
          className="quiz-form-input"
          value={numberOfQuestions}
          onChange={handleNumberChange}
        ></input>
        <label htmlFor="quiz-category" className="quiz-label">
          Category
        </label>
        <select
          id="quiz-category"
          className="quiz-form-input"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="any">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals & Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science & Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime & Manga</option>
          <option value="32">Entertainment: Cartoons & Animations</option>
        </select>
        <label htmlFor="quiz-difficulty" className="quiz-label">
          Difficulty
        </label>
        <select
          id="quiz-difficulty"
          className="quiz-form-input"
          value={difficulty}
          onChange={handleDifficultyChange}
        >
          <option value="any">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <label htmlFor="quiz-type" className="quiz-label">
          Type
        </label>
        <select
          id="quiz-type"
          className="quiz-form-input"
          value={type}
          onChange={handleTypeChange}
        >
          <option value="any">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True or False</option>
        </select>
        <div className={`error-container ${apiMessage ? "show" : ""}`}>
          {apiMessage}
        </div>
      </div>
      <Button
        type="submit"
        text={text}
        className="grey quiz-button"
        onClick={handleSubmit}
      />
    </form>
  );
}

export default QuizForm;
