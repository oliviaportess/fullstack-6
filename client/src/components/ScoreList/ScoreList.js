import React from "react";

import "./ScoreList.css";

const ScoreList = () => {
  // Hardcoded user data
  const users_scores = [
    { id: 1, name: "MM", score: 60 },
    { id: 2, name: "Pri", score: 40 },
    { id: 3, name: "ET", score: 70 },
    { id: 4, name: "PM", score: 100 },
    { id: 5, name: "AS", score: 30 },
    { id: 6, name: "M", score: 10 },
    { id: 7, name: "L", score: 20 },
  ];

  const sortedUsers = users_scores.sort((a, b) => b.score - a.score);

  return (
    <ol className="score-list">
      {sortedUsers.map((user) => (
        <li key={user.id} className="score-item">
          {/* need to add user's name and score in here somehow */}
          <div className="user-score-layout">
            <span className="user-name">{user.name}</span>
            <span className="user-result">{user.score}%</span>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default ScoreList;
