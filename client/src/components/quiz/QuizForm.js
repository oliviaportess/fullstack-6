import React from "react";

function QuizForm() {
  return (
    <form id="quiz-form">
      <label htmlFor="quiz-amount">No. of Questions</label>
      <input
        type="number"
        id="quiz-amount"
        min="1"
        max="50"
        placeholder="10"
        className="form-input-field"
      ></input>
      <label htmlFor="quiz-category">Select Category</label>
      <select>
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
      <label htmlFor="quiz-difficulty">Select Difficulty</label>
      <select>
        <option value="any">Any Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </form>
  );
}

export default QuizForm;
