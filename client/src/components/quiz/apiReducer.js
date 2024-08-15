import { createSlice } from "@reduxjs/toolkit";

const initialApiState = {
  isFetching: false,
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
  },
});

export const apiActions = apiSlice.actions;

export default apiSlice.reducer;
