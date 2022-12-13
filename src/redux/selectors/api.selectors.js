export const createLoadingSelector =
  (...entities) =>
  (state) =>
    /**
     * Returns `true` only when all actions is not loading
     */
    entities.some((entity) => state.api.loading[entity]);

export const createErrorSelector =
  (...entities) =>
  (state) => {
    /**
     * Returns the first error messages for actions.
     * We assume when any request fails on a page that
     * requires multiple API calls, we shows the first error
     */

    const errors = entities.map((entity) => state.api.error[entity]);

    return errors.filter(Boolean)?.[0] || '';
  };

export const createFetchedSelector =
  (...entities) =>
  (state) => {
    const key = entities.find((entity) => state.api.fetched[entity]);

    if (key) {
      return state.api.fetched[key];
    }

    return false;
  };

export const createApiSelector = (...entities) => ({
  loadingSelector: createLoadingSelector(...entities),
  fetchedSelector: createFetchedSelector(...entities),
  errorSelector: createErrorSelector(...entities),
});
