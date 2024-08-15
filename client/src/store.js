import { configureStore } from "@reduxjs/toolkit";

import quizReducer from "./components/quiz/quizReducer";
import apiReducer from "./components/quiz/apiReducer";

const store = configureStore({
  reducer: {
    quiz: quizReducer,
    api: apiReducer,
  },
});

export default store;
