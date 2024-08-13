// search for 10 random questions

const axios = require("axios"); //require axios for request so need to install

const fetchQuestion = {//imported from postman (node.js axios)
  search: async () => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://opentdb.com/api.php?amount=10",
      headers: {},
    };

    try {
      const response = await axios.request(config);
      const results = response.data.results;
      const allQuestions = [];
      for (let i=0;i<results.length;i++){
        const question = results[i].question;
        const correctAnswer = results[i].correct_answer;
        const answerOptions = results[i].incorrect_answers.concat(correctAnswer) //grabbing all answer options into one array
        allQuestions.push({
          id:(i+1),
          question: question,
          answerOptions: answerOptions
        })
      }
      return allQuestions; //returns an array of objects, each object is for one 'question' and contains the question number, question, and answers
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = fetchQuestion;
