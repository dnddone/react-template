import { Children } from 'react';

/**
 * No operation function
 */
export const noop = () => {};

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

/**
 * todo: add description
 */
export const getEntityArray = (entities) => {
  /**
   * The utility for `request.selectors.js` mostly.
   * It makes ['string'] from 'string' argument
   */
  if (typeof entities === 'string') {
    return [entities];
  }

  if (Array.isArray(entities)) {
    return entities;
  }

  return [];
};

export const reduce = {
  build: {
    literal: (type) => ({
      request: `${type}_REQUEST`,
      success: `${type}_SUCCESS`,
      failure: `${type}_FAILURE`,
    }),

    types(type) {
      const types = this.literal(type);

      return {
        request: { type: types.request },
        success: { type: types.success },
        failure: { type: types.failure },
      };
    },

    actions(type) {
      const types = this.types(type);

      return {
        request: (payload) => ({ ...types.request, payload }),
        success: (payload) => ({ ...types.success, payload }),
        failure: (error) => ({ ...types.failure, error }),
      };
    },
  },

  get(type) {
    return [this.build.types(type), this.build.actions(type)];
  },

  set: (type, payload) => ({ type, payload }),
};

export const removeEmptyProperties = (object = {}) =>
  Object.fromEntries(
    Object.entries(object).filter(([_, value]) => value != null)
  );

export const capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();

export const toLowerCase = (list) => list.map((value) => value.toLowerCase());

export const toUpperCase = (list) => list.map((value) => value.toUpperCase());

export const debounce = (func, delay) => {
  let timerId;

  const debounced = (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => func(...args), delay);
  };

  debounced.clear = () => {
    clearTimeout(timerId);
  };

  return debounced;
};

export const getSlots = (children) =>
  Children.toArray(children).reduce((components, component) => {
    const { slot } = component.props ?? {};

    if (slot) {
      return { ...components, [slot]: component };
    }

    return components;
  }, {});

export const as = (source, defaultSource) => source ?? defaultSource;
as.o = (source) => as(source, {});
as.a = (source) => as(source, []);
