import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quizFormActions } from "../components/quiz/quizFormReducer.js";

import "./BackgroundScreen.css";

function BackgroundScreen(props) {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.quizForm.category);

  function SetBackgroundImage() {}

  return (
    <div
      className="background-screen"
      style={{ backgroundImage: `url(${props.url})` }}
      data-testid="background-screen"
    ></div>
  );
}

export default BackgroundScreen;
