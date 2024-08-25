const request = require("supertest");

const mockPool = {
  query: jest.fn(),
};

jest.mock("./pool", () => mockPool);

const mockFetchQuestions = {
  search: jest.fn(),
};

jest.mock("./api/fetchQuestion", () => mockFetchQuestions);

const app = require("./app.js");

describe("Server", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("POST Questions Success", async () => {
    const mockQuestions = [
      {
        id: 1,
        question: "Question 1",
        answerOptions: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correctAnswer: "Option 1",
      },
      {
        id: 2,
        question: "Question 2",
        answerOptions: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correctAnswer: "Option 2",
      },
    ];
    mockFetchQuestions.search.mockResolvedValue(mockQuestions);

    const res = await request(app)
      .post("/api/searchWithInput")
      .send({
        quizSettings: {
          numberOfQuestions: 2,
          category: "Art",
          difficulty: "Easy",
          type: "Multiple Choice",
        },
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(mockQuestions);
  });

  test("POST Questions Error", async () => {
    mockFetchQuestions.search.mockRejectedValue(new Error("Error"));

    const res = await request(app).post("/api/searchWithInput");

    expect(res.statusCode).toEqual(500);
    expect(res.body).toEqual({ error: "Error fetching questions" });
  });

  test("GET Users success", async () => {
    const mockUsers = [
      { user_id: 1, name: "User 1" },
      { user_id: 2, name: "User 2" },
    ];
    mockPool.query.mockResolvedValue([mockUsers]);

    const res = await request(app).get("/users");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(mockUsers);
  });

  test("GET Users database error", async () => {
    mockPool.query.mockRejectedValue(new Error("Error"));

    const res = await request(app).get("/users");

    expect(res.statusCode).toEqual(500);
    expect(res.body).toEqual({ error: "Database error" });
  });

  test("GET Scoreboard success", async () => {
    const mockScoreboard = [
      {
        score_id: 1,
        name: "User 1",
        score: 20,
      },
      {
        score_id: 2,
        name: "User 2",
        score: 10,
      },
      {
        score_id: 3,
        name: "User 3",
        score: 5,
      },
    ];
    mockPool.query.mockResolvedValue([mockScoreboard]);

    const res = await request(app).get("/scoreboardData");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(mockScoreboard);
  });

  test("GET Scoreboard database error", async () => {
    mockPool.query.mockRejectedValue(new Error("Error"));

    const res = await request(app).get("/scoreboardData");

    expect(res.statusCode).toEqual(500);
    expect(res.body).toEqual({ error: "Database error" });
  });

  test("POST Users success", async () => {
    mockPool.query.mockResolvedValueOnce([[]]); // mock find user
    mockPool.query.mockResolvedValueOnce([[{ insertId: 4 }]]); // mock insert user

    const res = await request(app).post("/users").send({ name: "User 4" });

    expect(res.statusCode).toEqual(201);
  });

  test("POST Users bad request", async () => {
    const res = await request(app).post("/users").send({});

    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ message: "Please include a valid name" });
  });

  test("POST Users already exists", async () => {
    mockPool.query.mockResolvedValueOnce([[4]]); // mock find user

    const res = await request(app).post("/users").send({ name: "User 4" });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ error: "User already exists" });
  });

  test("POST Users database error", async () => {
    mockPool.query.mockRejectedValue(new Error("Error"));

    const res = await request(app).post("/users").send({ name: "User 4" });

    expect(res.statusCode).toEqual(500);
    expect(res.body).toEqual({ error: "Database error" });
  });

  test("POST Scoreboard success", async () => {
    mockPool.query.mockResolvedValueOnce([[{ user_id: 1, name: "User 1" }]]); // mock find user
    mockPool.query.mockResolvedValueOnce([[{ insertId: 1 }]]); // mock insert score

    const res = await request(app)
      .post("/scoreboard")
      .send({ name: "User 4", score: 20 });

    expect(res.statusCode).toEqual(201);
  });

  test("POST Scoreboard success with a score of zero", async () => {
    mockPool.query.mockResolvedValueOnce([[{ user_id: 1, name: "User 1" }]]); // mock find user
    mockPool.query.mockResolvedValueOnce([[{ insertId: 1 }]]); // mock insert score

    const res = await request(app)
      .post("/scoreboard")
      .send({ name: "User 4", score: 0 });

    expect(res.statusCode).toEqual(201);
  });

  test("POST Scoreboard bad request missing name", async () => {
    const res = await request(app).post("/scoreboard").send({ score: 20 });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ message: "Please include a name and score" });
  });

  test("POST Scoreboard bad request missing score", async () => {
    const res = await request(app).post("/scoreboard").send({ name: "User 1" });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ message: "Please include a name and score" });
  });

  test("POST Scoreboard bad request invalid score", async () => {
    const res = await request(app)
      .post("/scoreboard")
      .send({ name: "User 1", score: "four" });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({
      message: "Please include a number for the score",
    });
  });

  test("POST Scoreboard bad request user not found", async () => {
    mockPool.query.mockResolvedValueOnce([[]]); // mock find user

    const res = await request(app)
      .post("/scoreboard")
      .send({ name: "User 1", score: 20 });

    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual({
      error: "User not found",
    });
  });

  test("POST Scoreboard database error", async () => {
    mockPool.query.mockRejectedValue(new Error("Error"));

    const res = await request(app)
      .post("/scoreboard")
      .send({ name: "User 1", score: 20 });

    expect(res.statusCode).toEqual(500);
    expect(res.body).toEqual({ error: "Database error" });
  });
});
