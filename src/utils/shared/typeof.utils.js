export const isObject = (value) =>
  typeof value === 'object' && value !== null && Array.isArray(value) === false;

isObject.empty = (value) => !Object.keys(value).length;

export const isString = (value) =>
  typeof value === 'string' || value instanceof String;

/**
 * https://www.npmjs.com/package/is-number
 */
export const isNumber = (value) => {
  if (typeof value === 'number') {
    return value - value === 0;
  }

  if (typeof value === 'string' && value.trim() !== '') {
    return Number.isFinite(+value);
  }

  return false;
};

export const isNullable = (value) => value === undefined || value === null;
