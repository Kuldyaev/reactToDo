import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../reducers/users";
import tasksReducer from "../reducers/tasks";

export default configureStore({
  reducer: {
    users: usersReducer,
    tasks: tasksReducer,
  },
});
