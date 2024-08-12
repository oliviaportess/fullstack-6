import { createSlice } from "@reduxjs/toolkit";

const initialQuizState = {
  activeQuestionIndex: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState: initialQuizState,
  reducers: {
    incrementActiveQuestionIndex(state) {
      state.activeQuestionIndex++;
    },
  },
});

export const quizActions = quizSlice.actions;

export default quizSlice.reducer;
