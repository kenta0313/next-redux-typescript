import { RootState } from "../store/store";

export const countSelector = (state: RootState) => state.counter.count;

export const logSelector = (state: RootState) => state.log;