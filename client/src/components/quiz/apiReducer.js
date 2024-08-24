import { createSlice } from "@reduxjs/toolkit";

const initialApiState = {
  isFetching: false,
  isWaiting: false,
};

const apiSlice = createSlice({
  name: "api",
  initialState: initialApiState,
  reducers: {
    trueIsFetching(state) {
      state.isFetching = true;
    },
    falseIsFetching(state) {
      state.isFetching = false;
    },
    trueIsWaiting(state) {
      state.isWaiting = true;
    },
    falseIsWaiting(state) {
      state.isWaiting = false;
    },
  },
});

export const apiActions = apiSlice.actions;

export default apiSlice.reducer;
