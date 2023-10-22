import { createSlice } from "@reduxjs/toolkit";

export const tasksReducer = createSlice({
  name: "tasks",
  initialState: {
      tasks: [
          {
              id: 1,
              title: 'Приготовить рабочее место',
              descr: 'Найти ручку, бумагу, ластик и циркуль',
              createdAt: '20.10.2023',
              renovatedAt: '20.10.2023',
              comletedAd: null,
              prioritet: 3,
              status: 'выполняется',
              actor: 2,
              author: 1
          },
          {
              id: 2,
              title: 'Приступить к работе',
              descr: 'Выпить кофе, сходить на перекур',
              createdAt: '20.10.2023',
              renovatedAt: '20.10.2023',
              comletedAd: null,
              prioritet: 2,
              status: 'выполняется',
              actor: 2,
              author: 1
          },
          {
              id: 3,
              title: 'Заказать лимузин',
              descr: 'Не забыть, что лучшие друзья ждут этого события!',
              createdAt: '21.10.2023',
              renovatedAt: '21.10.2023',
              comletedAd: null,
              prioritet: 1,
              status: 'выполняется',
              actor: 2,
              author: 1
          },
          
      ]
  },
  reducers: {
 
  },
});

// Action creators are generated for each case reducer function
export const {
    
} = tasksReducer.actions;

export default tasksReducer.reducer;