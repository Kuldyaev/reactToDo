import { createSlice } from "@reduxjs/toolkit";

export const statusReducer = createSlice({
  name: "status",
  initialState: {
    isLoaderShowed: false,
    currentUser: {},
  },
  reducers: {
    showLoader: (state) => {
      state.isLoaderShowed = true;
    },
    hideLoader: (state) => {
      state.isLoaderShowed = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showLoader, hideLoader } = statusReducer.actions;

export default statusReducer.reducer;
