const axios = require("axios");

jest.mock("axios");

const fetchQuestion = require("./fetchQuestion");

describe("Fetch Questions", () => {
  it("search Success", async () => {
    const mockData = {
      results: [
        {
          type: "multiple",
          difficulty: "easy",
          category: "Art",
          question: "Question 1",
          correct_answer: "Answer 1",
          incorrect_answers: ["Answer 2", "Answer 3", "Answer 4"],
        },
        {
          type: "multiple",
          difficulty: "easy",
          category: "Art",
          question: "Question 2",
          correct_answer: "Answer A",
          incorrect_answers: ["Answer B", "Answer C", "Answer D"],
        },
      ],
    };

    axios.request.mockResolvedValue({ data: mockData });

    const result = await fetchQuestion.search({
      numberOfQuestions: 2,
      category: "Art",
      difficulty: "Easy",
      type: "Multiple Choice",
    });

    const result1 = result[0];

    expect(result1.id).toEqual(1);
    expect(result1.question).toEqual("Question 1");
    expect(result1.correctAnswer).toEqual("Answer 1");
    expect(result1.answerOptions).toEqual(
      expect.arrayContaining(["Answer 1", "Answer 2", "Answer 3", "Answer 4"]),
    );

    const result2 = result[1];

    expect(result2.id).toEqual(2);
    expect(result2.question).toEqual("Question 2");
    expect(result2.correctAnswer).toEqual("Answer A");
    expect(result2.answerOptions).toEqual(
      expect.arrayContaining(["Answer A", "Answer B", "Answer C", "Answer D"]),
    );
  });

  it("search Error", async () => {
    const mockError = new Error("Network error");
    axios.request.mockRejectedValue(mockError);

    await expect(
      fetchQuestion.search({
        numberOfQuestions: 2,
        category: "Art",
        difficulty: "Easy",
        type: "Multiple Choice",
      }),
    ).rejects.toThrow(mockError);
  });
});
