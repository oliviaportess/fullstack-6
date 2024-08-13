import React from "react";
import { useState } from "react";

const FetchQuestion = () => {
  const [questions, setQuestions] = useState(["questions placeholder"]);
  const performSearch = async () => {
    const result = await fetch("/api/search/");
    const jsonResponse = await result.json();
    setQuestions(jsonResponse);
  };

  return (
    <>
      <button onClick={performSearch}>Fetch Questions</button>
      <ul>
        {questions.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </>
  );
};

export default FetchQuestion;
