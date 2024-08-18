const express = require("express");
const pool = require("./pool");
const cors = require("cors");
require("dotenv").config();
const he = require("he");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// api call endpoint
// const fetchQuestion = require("./api/fetchQuestion");
// const { default: axios } = require("axios");
const fetchQuestion = require("./api/fetchQuestion");
//const { default: axios } = require("axios");

// app.get("/api/search/", async (req, res) => {
//   const allQuestions = await fetchQuestion.search();
//   res.json(allQuestions);
// });

// post request to receive user input and execute the search
app.post("/api/searchWithInput", async (req, res) => {
  const { quizSettings } = req.body; // Extract the user input from the request body
  console.log("Received input:", quizSettings);
  const numberOfQuestions = quizSettings.numberOfQuestions;
  const category = quizSettings.category;
  const difficulty = quizSettings.difficulty;
  const type = quizSettings.type;

  try {
    const apiUrl = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=${type}`;
    const response = await fetch(apiUrl);
    const triviaData = await response.json();
    const allQuestions = [];
    console.log("test 1");
    for (let i = 0; i < triviaData.results.length; i++) {
      const question = he.decode(triviaData.results[i].question);
      const correctAnswer = he.decode(triviaData.results[i].correct_answer);
      const answerOptions = [
        correctAnswer, //using spread method to combine correct answer string and array of incorrect answers
        ...triviaData.results[i].incorrect_answers,
      ].sort(() => Math.random() - 0.5); //returns a random positive or negative number for each comparison in the array so the sort method randomly sorts the array
      const answerOptionsDecoded = answerOptions.map((answer) =>
        he.decode(answer),
      );
      allQuestions.push({
        id: i + 1,
        question: question,
        answerOptions: answerOptionsDecoded,
        correctAnswer: correctAnswer,
      });
    }
    console.log(allQuestions);
    res.json(allQuestions);
  } catch (error) {
    console.error("Error fetching trivia data:", error);
  }
});

// TRIED to get the form to call the API but not quite working...
// app.get("api/search", async (req, res) => {
//   const { amount, category, difficulty, type } = req.query;

//   const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;

//   const response = await axios.get(url);
//   const results = response.data.results;

//   const allQuestions = results.map((result, index) => {
//     const { question, correct_answer, incorrect_answers } = result;
//     const answers = [correct_answer, ...incorrect_answers].sort();

//     return {
//       id: index + 1,
//       question,
//       answers,
//       correctAnswer: correct_answer,
//     };
//   });

//   res.json(allQuestions);
// });

app.use((req, res) => {
  res.status(200).send("Hi");
});

//database endpoints
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
