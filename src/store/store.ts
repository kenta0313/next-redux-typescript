import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { counterSlice, CounterState } from '../slice/counter';
import { logSlice, LogState } from '../slice/log';
import { initialstate, usersSlice } from '../slice/users';
import { userApi } from '../rtkquery';

export type AppState = {
  counter: CounterState;
  log: LogState;
  users: initialstate;
  [userApi.reducerPath]:any;
};

const rootReducer = combineReducers<AppState>({
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