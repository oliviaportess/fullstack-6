import React from "react";
// import { useSelector } from "react-redux";

import "./ScoreList.css";

const ScoreList = () => {
  // const userScore = useSelector((state) => state.quiz.score);

  // Hardcoded user data
  const users_scores = [
    { id: 1, name: "MM", score: 6 },
    { id: 2, name: "Pri", score: 4 },
    { id: 3, name: "ET", score: 7 },
    { id: 4, name: "PM", score: 10 },
    { id: 5, name: "AS", score: 3 },
    { id: 6, name: "M", score: 1 },
    { id: 7, name: "L", score: 2 },
  ];

  // const scores = [
  //   { score_id: 1, user_id: 7, score: 2 },
  //   { score_id: 2, user_id: 2, score: 4 },
  //   { score_id: 3, user_id: 6, score: 1 },
  //   { score_id: 4, user_id: 3, score: 7 },
  //   { score_id: 5, user_id: 5, score: 3 },
  //   { score_id: 6, user_id: 1, score: 6 },
  //   { score_id: 7, user_id: 4, score: 10 },
  // ];

  const sortedUsers = users_scores.sort((a, b) => b.score - a.score);

  return (
    <ul className="score-list">
      {sortedUsers.map((user, index) => (
        <li key={user.index} className="score-item">
          <span>
            <h5 className="user-bold">{index + 1}</h5>
          </span>
          <span>
            <h6 className="user-mid">{user.name}</h6>
          </span>
          <span>
            <p className="user-small">{user.score}</p>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ScoreList;
