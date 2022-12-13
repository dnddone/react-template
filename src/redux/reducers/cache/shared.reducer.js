import { ACTION_TYPE } from '@constants';

const initialState = {};

export const sharedReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPE.CACHE_ANY:
      return { ...state, ...payload };

    default:
      return state;
  }
};
