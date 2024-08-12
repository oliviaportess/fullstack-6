import React from 'react';
import './UserScore.css';

const UserScore = ({ scores, userScore }) => {
    return (
        <div className="scoreboard">
            <h2>Scoreboard</h2>
            <ul className="score-list">
                {scores.map((user, index) => (
                    <li key={index}>
                        <span className="rank">{index + 1}.</span>
                        <span className="username">{user}</span>
                    </li>
                ))}
            </ul>
            <div className="user-score">
                <p>Your Score</p>
                <p className="score">{userScore}/10</p>
            </div>
            <button className="back-button">Back to Home</button>
        </div>
    );
};

export default UserScore;
