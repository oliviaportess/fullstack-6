const QuestionDisplay = ({questions}) => {
    return (
        <ul>
        {questions.map(text => <li key={text}>{text}</li>)}
        </ul>
    );
}
 
export default QuestionDisplay;