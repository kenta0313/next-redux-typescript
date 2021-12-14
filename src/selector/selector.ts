import { store } from "../store/store";

export type RootState = ReturnType<typeof store.getState>;

export const countSelector = (state: RootState) => state.counter.count;

export const logSelector = (state: RootState) => state.log;