import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { counterSlice, CounterState } from '../slice/counter';
import { logSlice, LogState } from '../slice/log';

export type AppState = {
  counter: CounterState;
  log: LogState;
};

const rootReducer = combineReducers<AppState>({
  counter: counterSlice.reducer,
  log: logSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});