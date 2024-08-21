const express = require("express");
const pool = require("./pool");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// serve static files in the build folder
app.use(express.static(path.join(__dirname, "./public")));

// enable Node.js to point to all of our URLs
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

// post request to receive user input and fetch questions from api
const fetchQuestion = require("./api/fetchQuestion");
app.post("/api/searchWithInput", async (req, res) => {
  try {
    const { quizSettings } = req.body; // Extract the user input from the request body
    const allQuestions = await fetchQuestion.search(quizSettings);
    res.json(allQuestions);
  } catch (error) {
    console.error("Error fetching questions:", error.message);
    res.status(500).json({ error: "Error fetching questions" });
  }
});

// database endpoints
app.get("/users", async (req, res) => {
  try {
    const sql = `
      SELECT
        *
      FROM
        users
    `;
    const [results] = await pool.query(sql);
    res.status(200).json(results);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ error: "Database error" });
  }
});

app.get("/scoreboard", async (req, res) => {
  try {
    const sql = `
      SELECT
        u.name,
        s.score
      FROM
        scores s
        INNER JOIN users u ON s.user_id = u.user_id
      ORDER BY s.score DESC
      LIMIT 10
    `;
    const [results] = await pool.query(sql);
    res.status(200).json(results);
  } catch (error) {
    console.error("Error fetching scores:", error.message);
    res.status(500).json({ error: "Database error" });
  }
});

app.post("/users", async (req, res) => {
  const { name } = req.body;

  if (!name) {
    console.log("Missing name");
    return res.status(400).json({ message: "Please include a valid name" });
  }

  try {
    const findUser = "SELECT user_id FROM users WHERE name = ?";
    const [findUserResult] = await pool.query(findUser, [name]);

    if (findUserResult.length !== 0) {
      console.log("User already exists");
      return res.status(400).json({ error: "User already exists" });
    }

    const sql = "INSERT INTO users (name) VALUES (?)";
    const [results] = await pool.query(sql, [name]);
    res.status(201).json({
      id: results.insertId,
      message: `User ${name} created successfully`,
    });
  } catch (error) {
    console.log("Error inserting user:", error.message);
    res.status(500).json({ error: "Database error" });
  }
});

app.post("/scoreboard", async (req, res) => {
  const { name, score } = req.body;

  if (!name || !score) {
    console.log("Missing name or score");
    return res.status(400).json({ message: "Please include a name and score" });
  }

  if (isNaN(score)) {
    console.log("Score is not a number");
    return res
      .status(400)
      .json({ message: "Please include a number for the score" });
  }

  try {
    const findUser = "SELECT user_id FROM users WHERE name = ?";
    const [findUserResult] = await pool.query(findUser, [name]);

    if (findUserResult.length === 0) {
      console.log("Error finding user");
      return res.status(404).json({ error: "User not found" });
    }

    const userId = findUserResult[0].user_id;

    const sql = "INSERT INTO scores (user_id, score) VALUES (?, ?)";
    const [results] = await pool.query(sql, [userId, score]);

    res.status(201).json({
      id: results.insertId,
      message: `A score of ${score} for ${name} has been added successfully`,
    });
  } catch (error) {
    console.log("Error inserting score:", error.message);
    res.status(500).json({ error: "Database error" });
  }
});

// eslint-disable-next-line
app.use((error, req, res, next) => {
  console.log("Error:", error.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

module.exports = app;
