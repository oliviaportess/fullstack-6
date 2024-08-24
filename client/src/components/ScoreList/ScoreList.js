import React, { useState, useEffect, useCallback } from "react";

import "./ScoreList.css";

const ScoreList = () => {
  const [scoreboard, setScoreboard] = useState([]);
  const [loading, setLoading] = useState("true");

  const fetchScores = useCallback(async function fetchScores() {
    try {
      const response = await fetch("/scoreboardData");
      const jsonResponse = await response.json();
      setScoreboard(jsonResponse);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching scoreboard data:", error);
    }
  }, []);

  useEffect(() => {
    fetchScores();
  }, [fetchScores]);

  if (loading) return <p>Loading scoreboard...</p>;

  return (
    <ol className="score-list">
      {scoreboard.map((user, index) => (
        <li key={index} className="score-item">
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
