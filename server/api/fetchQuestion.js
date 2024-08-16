// search for 10 random questions

const axios = require("axios");
const he = require("he");

const fetchQuestion = {
  //imported from postman (node.js axios)
  search: async () => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://opentdb.com/api.php?amount=10",
      headers: { "Access-Control-Allow-Origin": "*" },
    };

    try {
      const response = await axios.request(config);
      const results = response.data.results;
      const allQuestions = [];
      for (let i = 0; i < results.length; i++) {
        const question = he.decode(results[i].question);
        const correctAnswer = he.decode(results[i].correct_answer);
        const answerOptions = [
          correctAnswer, //using spread method to combine correct answer string and array of incorrect answers
          ...results[i].incorrect_answers,
        ].sort(() => Math.random() - 0.5); //returns a random positive or negative number for each comparison in the array so the sort method randomly sorts the array
        const answerOptionsDecoded = answerOptions.map((answer) =>
          he.decode(answer),
        );
        allQuestions.push({
          //Note: the structure of this object can change if needed in the FE
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
