import React from "react";

const FetchQuestion = () => {
  const performSearch = async () => {
    const result = await fetch("/api/search/");
    const jsonResponse = await result.json();
    console.log(jsonResponse);
  };

  return <button onClick={performSearch}>Fetch Questions</button>;
};

export default FetchQuestion;
