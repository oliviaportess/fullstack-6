const express = require("express");
const pool = require("./pool");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//api call endpoint
const fetchQuestion = require("./api/fetchQuestion");
app.get("/api/search/", async (req, res) => {
  const allQuestions = await fetchQuestion.search();
  res.json(allQuestions);
});

//database endpoints
app.use((req, res) => {
  res.status(200).send("Hi");
});

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
    return res.status(400).json({ message: "Please include a name" });
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

app.use((error, req, res) => {
  console.log("Error:", error.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
