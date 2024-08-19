const axios = require("axios");
const he = require("he");

const fetchQuestion = {
    search: async (quizSettings) => {
    const numberOfQuestions = quizSettings.numberOfQuestions;
    const category = quizSettings.category;
    const difficulty = quizSettings.difficulty;
    const type = quizSettings.type;
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=${type}`,
      headers: { "Access-Control-Allow-Origin": "*" },
    };

    try {
      const response = await axios.request(config);
      const results = response.data.results;
      const allQuestions = [];
      for (let i = 0; i < results.length; i++) {
        const question = he.decode(results[i].question); // using 'he' library to remove html entities
        const correctAnswer = he.decode(results[i].correct_answer);
        const answerOptions = [
          correctAnswer, // using spread method to combine correct answer string and array of incorrect answers
          ...results[i].incorrect_answers,
        ].sort(() => Math.random() - 0.5); // returns a random positive or negative number for each comparison in the array so the sort method randomly sorts the array
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
      return allQuestions;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = fetchQuestion;