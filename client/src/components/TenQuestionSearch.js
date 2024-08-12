import { useState } from 'react';
import QuestionDisplay from './QuestionDisplay';

const TenQuestionSearch = () => {
    const [questions, setQuestions] = useState(['questions placeholder']);
    const performSearch = async () => { //perform search function
    const result = await fetch('/api/search/') //calls the backend
    const jsonResponse = await result.json();
    setQuestions(jsonResponse) //sets the state to update the questions array
    }  
    
    return (<>
        <button onClick={performSearch}>Search</button>
        <QuestionDisplay questions = {questions} />
        </>
      );
}
 
export default TenQuestionSearch ;