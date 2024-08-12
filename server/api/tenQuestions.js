// search for 10 questions

const axios = require('axios'); //require axios for request so need to install

const tenQuestions = { //imported from postman (node.js axios)
    search: async () => { 
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://opentdb.com/api.php?amount=10',
        headers: { }
      };
      
      try {
      const response = await axios.request(config) //replaced postman stuff with async await functionality
      const results = response.data.results
      const questions = results.map(it => it.question)
      return questions
      } catch (error) {
        console.log(error);
      };
    }
}

module.exports = tenQuestions