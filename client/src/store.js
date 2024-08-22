import { configureStore } from "@reduxjs/toolkit";

import quizReducer from "./components/quiz/quizReducer";
import apiReducer from "./components/quiz/apiReducer";
import quizFormReducer from "./components/quiz/quizFormReducer";

const store = configureStore({
  reducer: {
    quiz: quizReducer,
    api: apiReducer,
    quizForm: quizFormReducer,
  },
});

export default store;
