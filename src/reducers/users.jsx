import { createSlice } from "@reduxjs/toolkit";

export const usersReducer = createSlice({
  name: "users",
  initialState: {
      isAuthorized: false,
      users: [
          { login: 'admin', pass: 'admin' },
          { login: 'user', pass: '123456' }
      ]
  },
  reducers: {
    authorize: (state) => {
      state.isAuthorized = true;
      },
      unauthorize: (state) => {
      state.isAuthorized = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
    authorize,
    unauthorize
} = usersReducer.actions;

export default usersReducer.reducer;