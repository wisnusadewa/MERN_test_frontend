import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from './users/userSlice';

const store = configureStore({
  reducer: {
    auth: userSliceReducer,
  },
});

export default store;
