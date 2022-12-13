import { combineReducers } from 'redux';

import { errorReducer } from './api/error.reducer';
import { fetchedReducer } from './api/fetched.reducer';
import { loadingReducer } from './api/loading.reducer';
import { sharedReducer } from './cache/shared.reducer';
import { uiReducer } from './cache/ui.reducer';

export const rootReducer = combineReducers({
  api: combineReducers({
    error: errorReducer,
    fetched: fetchedReducer,
    loading: loadingReducer,
  }),
  cache: combineReducers({
    shared: sharedReducer,
    ui: uiReducer,
  }),
});
