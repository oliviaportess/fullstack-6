import { configureStore } from "@reduxjs/toolkit";

import quizReducer from "./components/quiz/quizReducer";

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export default store;
