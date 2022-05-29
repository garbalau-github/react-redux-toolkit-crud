import { createSlice } from '@reduxjs/toolkit';

import { UsersData } from '../Data';

export const userSlice = createSlice({
  name: 'Users',
  initialState: {
    value: UsersData,
  },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    updateUser: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.newUsername;
        }
        return user;
      });
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addUser } = userSlice.actions;
export const { updateUser } = userSlice.actions;
export const { deleteUser } = userSlice.actions;

export default userSlice.reducer;
