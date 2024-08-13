import { createSlice } from "@reduxjs/toolkit";

const initialQuizState = {
  activeQuestionIndex: 0,
  userAnswers: [],
  selectedAnswer: "",
  answerState: "",
};

const quizSlice = createSlice({
  name: "quiz",
  initialState: initialQuizState,
  reducers: {
    incrementActiveQuestionIndex(state) {
      state.activeQuestionIndex++;
    },
    addUserAnswer(state, action) {
      state.userAnswers = [...state.userAnswers, action.payload];
    },
    setSelectedAnswer(state, action) {
      state.selectedAnswer = action.payload;
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
