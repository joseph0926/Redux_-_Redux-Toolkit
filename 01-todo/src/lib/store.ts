import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from '../features/tasks-slice';

const store = configureStore({
  reducer: {
    tasks: tasksSlice,
  },
});

export type ApplicationState = ReturnType<typeof store.getState>;

export default store;
