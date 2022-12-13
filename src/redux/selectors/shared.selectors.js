import { createSelector } from 'reselect';

export const cacheSelector = (state) => state.cache;

export const uiSelector = createSelector(cacheSelector, ({ ui }) => ui);

export const sharedSelector = createSelector(
  cacheSelector,
  ({ shared }) => shared
);
