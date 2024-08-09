import React from "react";

import AnswerButton from "./AnswerButton";

function AnswerOptions(props) {
  return (
    <ul>
      {props.answers.map((answer)=>(
        <li key={answer}>
          <AnswerButton text={answer} />
        </li>
      ))}
    </ul>
  );
};

export default AnswerOptions;
