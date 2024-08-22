import React from "react";
import "./ScoreList.css";

const ScoreList = ({ scores }) => {
  // Hardcoded user data
  const users = [
    { rank: 1, name: "User 4", score: 8 },
    { rank: 2, name: "User 3", score: 7 },
    { rank: 3, name: "User 1", score: 6 },
    { rank: 4, name: "User 2", score: 5 },
    { rank: 5, name: "User 6", score: 4 },
    { rank: 6, name: "User 5", score: 3 },
  ];

  return (
    // <ul className="score-list">
    //   {scores.map((user, index) => (
    //     <li key={index}>
    //       <span className="rank">{index + 1}.</span>
    //       <span className="username">{user}</span>
    //     </li>
    //   ))}
    // </ul>

    // {users.map((user) => (
    //   <div key={user.rank} className="score-item">
    //     <span className="rank">{user.rank}.</span>
    //     <span className="name">{user.name}</span>
    //   </div>

    <ul>
      <li></li>
    </ul>
  );
};

export default ScoreList;
