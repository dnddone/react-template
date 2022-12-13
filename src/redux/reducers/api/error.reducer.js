const initialState = {};

export const errorReducer = (state = initialState, action) => {
  const { type, error } = action;
  const matches = /(.*)_(REQUEST|FAILURE|RESET_ERROR)/.exec(type);

  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;

  return {
    ...state,
    [requestName]: requestState === 'FAILURE' ? error : '',
  };
};
