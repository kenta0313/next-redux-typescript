import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CounterState = {
  count: number;
};

const initialState: CounterState = { count: 0 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCount: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        count: state.count + action.payload, };
    },
    decrementCount: (state) => {
      return { ...state, count: state.count - 1 };
    },
  },
});