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
      state.numberOfQuestions = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setDifficulty(state, action) {
      state.difficulty = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    reset(state) {
      state.numberOfQuestions = 10;
      state.category = "any";
      state.difficulty = "any";
      state.type = "any";
    },
  },
});

export const quizFormActions = quizFormSlice.actions;

export default quizFormSlice.reducer;
