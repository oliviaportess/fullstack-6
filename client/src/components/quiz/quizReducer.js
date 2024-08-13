import { createSlice } from "@reduxjs/toolkit";

const initialQuizState = {
  activeQuestionIndex: 0,
  answerState: "",
};

const quizSlice = createSlice({
  name: "quiz",
  initialState: initialQuizState,
  reducers: {
    incrementActiveQuestionIndex(state) {
      state.activeQuestionIndex++;
    },
    unansweredAnswerState(state) {
      state.answerState = "";
    },
    correctAnswerState(state) {
      state.answerState = "correct";
    },
    wrongAnswerState(state) {
      state.answerState = "wrong";
    },
  },
});

export const quizActions = quizSlice.actions;

export default quizSlice.reducer;
