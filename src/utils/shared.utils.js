import { Children } from 'react';

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
export const getSlots = (children) =>
  Children.toArray(children).reduce((components, component) => {
    const { slot } = component.props ?? {};

    if (slot) {
      return { ...components, [slot]: component };
    }

    return components;
  }, {});
