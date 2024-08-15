import React from 'react';
import './ScoreList.css'; // Import the CSS specific to ScoreList

const ScoreList = ({ scores }) => {
  return (
    <ul className="score-list">
      {scores.map((user, index) => (
        <li key={index}>
          <span className="rank">{index + 1}.</span>
          <span className="username">{user}</span>
        </li>
      ))}
    </ul>
  );
};

export default ScoreList;