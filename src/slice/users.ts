import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../selector/selector';
import { AppDispatch } from '../store/store';

interface Response {
  users: any[];
}

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  return await fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
    res.json()
  );
});

export type initialstate = {
  users: any;
  loading: boolean;
  error: boolean;
};

const initialState: initialstate = {
  users: [],
  loading: false,
  error: false,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder
    .addCase(getUsers.pending, (state) => {
      state.loading = true;
    })
    .addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase(getUsers.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
}});