import React from 'react';
import PropTypes from 'prop-types';

import { isObject } from '@utils';

const propTypes = {
  if: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
    PropTypes.func,
  ]),
  else: PropTypes.node,
  children: PropTypes.node,
};

const defaultProps = {
  if: false,
  else: null,
  children: null,
};

export const Render = ({ if: source, else: elseContent, children }) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  const content = <>{children}</>;

  if (source === null) {
    return elseContent ?? source;
  }

  if (Array.isArray(source)) {
    return source.filter(Boolean).length ? content : elseContent;
  }

  if (isObject(source)) {
    return !isObject.empty(source) ? content : elseContent;
  }

  if (typeof source === 'number' && Number.isFinite(source)) {
    return content;
  }

  if (source) {
    return content;
  }

  return elseContent;
};

Render.propTypes = propTypes;
Render.defaultProps = defaultProps;
