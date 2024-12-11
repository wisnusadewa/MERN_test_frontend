import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  accessToken: JSON.parse(localStorage.getItem('accessToken')) || null,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.accessToken = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
      localStorage.setItem('accessToken', JSON.stringify(action.payload.token));
    },
    logoutUser: () => {
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
    },
  },
});

export const { loginSuccess, logoutUser } = userSlice.actions;

export default userSlice.reducer;
