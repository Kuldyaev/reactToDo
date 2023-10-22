import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../reducers/users";
import tasksReducer from "../reducers/tasks";
import statusReducer from "../reducers/status";

export default configureStore({
  reducer: {
    users: usersReducer,
    tasks: tasksReducer,
    status: statusReducer,
  },
});
