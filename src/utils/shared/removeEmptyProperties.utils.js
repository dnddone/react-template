export const removeEmptyProperties = (object = {}) =>
  Object.fromEntries(
    Object.entries(object).filter(([_, value]) => value != null)
  );
