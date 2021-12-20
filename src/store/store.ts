import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { counterSlice } from '../slice/counter';
import { logSlice } from '../slice/log';
import { usersSlice } from '../slice/users';
import { userApi } from '../rtkquery';

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  log: logSlice.reducer,
  users: usersSlice.reducer,
  [userApi.reducerPath]: userApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type AppDispatch = typeof store.dispatch;