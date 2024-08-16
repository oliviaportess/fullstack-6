import React, { useState } from "react";

import "./QuizForm.css";
import Button from "../Button";

function QuizForm({ onSubmit }) {
  const [numberOfQuestions, setNumberOfQuestions] = useState(10); // Default to 10 questions
  const [category, setCategory] = useState("any");
  const [difficulty, setDifficulty] = useState("any");
  const [type, setType] = useState("any");

  function handleSubmit(event) {
    event.preventDefault();
    const quizSettings = {
      numberOfQuestions,
      category: category === "any" ? "" : category,
      difficulty: difficulty === "any" ? "" : difficulty,
      type: type === "any" ? "" : type,
    };
    alert("Submitted");
    // console.log(quizSettings);
    onSubmit(quizSettings);
  }

  return (
    <form onSubmit={handleSubmit}>
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
          onChange={(event) => setNumberOfQuestions(event.target.value)}
        ></input>
        <label htmlFor="quiz-category" className="quiz-label">
          Category
        </label>
        <select
          id="quiz-category"
          className="quiz-form-input"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
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
          id="quiz-category"
          className="quiz-form-input"
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value)}
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
          onChange={(event) => setType(event.target.value)}
        >
          <option value="any">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True or False</option>
        </select>
      </div>
      <Button type="submit" text="Submit" className="grey quiz-button" />
    </form>
  );
}

export default QuizForm;