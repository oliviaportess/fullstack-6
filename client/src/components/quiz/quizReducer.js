import { createSlice } from "@reduxjs/toolkit";

const initialQuizState = {
  activeQuestionIndex: 0,
  userAnswers: [],
  selectedAnswer: "",
  answerState: "",
  questions: [],
  score: 0,
  name: "",
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
    saveQuestions(state, action) {
      state.questions = action.payload;
    },
    incrementScore(state) {
      state.score++;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    resetName(state) {
      // separate action to reset name so it's not reset with others in the instructions page
      state.name = "";
    },
    reset(state) {
      state.activeQuestionIndex = 0;
      state.userAnswers = [];
      state.selectedAnswer = "";
      state.answerState = "";
      state.questions = [];
      state.score = 0;
    },
  },
});

export const quizActions = quizSlice.actions;

export default quizSlice.reducer;
