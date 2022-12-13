import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { BadgeColor } from '@types';

const propTypes = {
  large: PropTypes.bool,
  className: PropTypes.string,
  color: BadgeColor,
  children: PropTypes.node,
};

const defaultProps = {
  large: false,
  className: '',
  color: 'grey',
  children: null,
};

export const Badge = ({ className, large, color, children }) => (
  <div
    className={cx(
      className,
      `badge badge-${color} content-center align-center py-1 px-2 uppercase font-600`,
      { large }
    )}
  >
    <span className="badge__content px-1">{children}</span>
  </div>
);

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;
