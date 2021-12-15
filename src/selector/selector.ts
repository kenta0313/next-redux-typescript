import { createSelector } from "@reduxjs/toolkit";
import { store } from "../store/store";

export type RootState = ReturnType<typeof store.getState>;

export const countSelector = (state: RootState) => state.counter.count;

export const logSelector = (state: RootState) => state.log;

export const usersSelector = (state: RootState) => state.users;

/**
 * LINEの名前を取得する
 * @returns displayName
 */
export const logLoadingSelector = createSelector(logSelector, (log) => {
  return log.loading;
})