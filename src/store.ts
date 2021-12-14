import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { counterSlice, CounterState } from './features/counter';
import { logSlice, LogState } from './features/log';

export type AppState = {
  counter: CounterState;
  log: LogState;
};

const rootReducer = combineReducers<AppState>({
  counter: counterSlice.reducer,
  log: logSlice.reducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;