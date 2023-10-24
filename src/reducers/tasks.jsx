import { createSlice } from "@reduxjs/toolkit";

export const tasksReducer = createSlice({
  name: "tasks",
  initialState: {
      tasks: [
          {
              id: 1,
              title: 'Приготовить рабочее место',
              description: 'Найти ручку, бумагу, ластик и циркуль',
              priority_id: 1,
              status_id: 1,
              executor: {
                  id: 3,
                  name: 'Приготовить рабочее место',
                  email: "mitchell.adelbert@example.net",
                  email_verified_at: "2023-10-23T10:36:10.000000Z",
                  is_admin: 0,
                  created_at: "2023-10-23T10:36:10.000000Z",
                  updated_at: "2023-10-23T10:36:10.000000Z"
              },
              creator: {
                  id: 1,
                  name: "Prof. Keira Connelly",
                  email: "feil.nicholas@example.net",
                  email_verified_at: "2023-10-23T10:36:10.000000Z",
                  is_admin: 1,
                  created_at: "2023-10-23T10:36:10.000000Z",
                  updated_at: "2023-10-23T10:36:10.000000Z"
              },
              date_end: "2023-10-19",
              created_at: null,
              updated_at: null,
              priority: {
                  id: 1,
                  name: "Высокий",
                  created_at: null,
                  updated_at: null
              },
              status: {
                  id: 1,
                  name: "к выполнению",
                  created_at: null,
                  updated_at: null
              },
          },    
            {
              id: 2,
              title: 'Приступить к работе',
              description: 'Выпить кофе, сходить на перекур',
              priority_id: 1,
              status_id: 1,
              executor: {
                  id: 3,
                  name: 'Приготовить рабочее место',
                  email: "mitchell.adelbert@example.net",
                  email_verified_at: "2023-10-23T10:36:10.000000Z",
                  is_admin: 0,
                  created_at: "2023-10-23T10:36:10.000000Z",
                  updated_at: "2023-10-23T10:36:10.000000Z"
              },
              creator: {
                  id: 1,
                  name: "Prof. Keira Connelly",
                  email: "feil.nicholas@example.net",
                  email_verified_at: "2023-10-23T10:36:10.000000Z",
                  is_admin: 1,
                  created_at: "2023-10-23T10:36:10.000000Z",
                  updated_at: "2023-10-23T10:36:10.000000Z"
              },
              date_end: "2023-10-19",
              created_at: null,
              updated_at: null,
              priority: {
                  id: 1,
                  name: "Высокий",
                  created_at: null,
                  updated_at: null
              },
              status: {
                  id: 1,
                  name: "к выполнению",
                  created_at: null,
                  updated_at: null
              },
          },  
            {
              id: 3,
              title: 'Заказать лимузин',
              description: 'Не забыть, что лучшие друзья ждут этого события!',
              priority_id: 1,
              status_id: 1,
              executor: {
                  id: 3,
                  name: 'Приготовить рабочее место',
                  email: "mitchell.adelbert@example.net",
                  email_verified_at: "2023-10-23T10:36:10.000000Z",
                  is_admin: 0,
                  created_at: "2023-10-23T10:36:10.000000Z",
                  updated_at: "2023-10-23T10:36:10.000000Z"
              },
              creator: {
                  id: 1,
                  name: "Prof. Keira Connelly",
                  email: "feil.nicholas@example.net",
                  email_verified_at: "2023-10-23T10:36:10.000000Z",
                  is_admin: 1,
                  created_at: "2023-10-23T10:36:10.000000Z",
                  updated_at: "2023-10-23T10:36:10.000000Z"
              },
              date_end: "2023-10-19",
              created_at: null,
              updated_at: null,
              priority: {
                  id: 1,
                  name: "Высокий",
                  created_at: null,
                  updated_at: null
              },
              status: {
                  id: 1,
                  name: "к выполнению",
                  created_at: null,
                  updated_at: null
              },
          },         
      ]
  },
  reducers: {
 
  },
});

export const {
    
} = tasksReducer.actions;

export default tasksReducer.reducer;