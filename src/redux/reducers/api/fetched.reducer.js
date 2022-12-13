const initialState = {};

export const fetchedReducer = (state = initialState, action) => {
  const { type } = action;

  const matches = /(.*)_(SUCCESS|FAILURE|RESET_FETCH)/.exec(type);

  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;

  if (requestState === 'RESET_FETCH') {
    // eslint-disable-next-line no-unused-vars
    const { [requestName]: poppedFetched, ...rest } = state;

    return rest;
  }

  return {
    ...state,
    [requestName]: true,
  };
};
