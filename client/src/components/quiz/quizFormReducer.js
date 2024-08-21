import { createSlice } from "@reduxjs/toolkit";

const initialQuizFormState = {
  numberOfQuestions: 10,
  category: "any",
  difficulty: "any",
  type: "any",
};

const quizFormSlice = createSlice({
  name: "quizForm",
  initialState: initialQuizFormState,
  reducers: {
    setNumberOfQuestions(state, action) {
      state.setNumberOfQuestions = action.payload;
    },
    setCategory(state, action) {
      state.setCategory = action.payload;
    },
    setDifficulty(state, action) {
      state.setDifficulty = action.payload;
    },
    setType(state, action) {
      state.setType = action.payload;
    },
    reset(state) {
      state.numberOfQuestions = 10,
      state.category = "any",
      state.difficulty = "any",
      state.type = "any",
    },
  },
});

export const quizFormActions = quizFormSlice.actions;

export default quizFormSlice.reducer;
