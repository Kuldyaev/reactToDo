import { createSlice } from "@reduxjs/toolkit";

export const usersReducer = createSlice({
  name: "users",
  initialState: {
      isAuthorized: false,
      users: [
          { id: 1, login: 'admin', pass: 'admin', firstname: 'Семен', middlename: 'Семенович', familyname: 'Горбунков', managerId: null },
          { id: 2, login: 'user', pass: '123456', firstname: 'Антон', middlename: 'Семенович', familyname: 'Шпак', managerId: 1 },
          { id: 3, login: 'customer', pass: '123456', firstname: 'Карп', middlename: 'Савельевич', familyname: 'Якин', managerId: 1  },
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