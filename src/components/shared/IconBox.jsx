import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { BoxSize } from '@types';

import { Render } from '@components';

const propTypes = {
  icon: PropTypes.shape(),
  className: PropTypes.string,
  size: BoxSize,
};

const defaultProps = {
  icon: null,
  className: '',
  size: '24',
};

export const IconBox = ({ className, size, icon, ...props }) => (
  <Render if={icon}>
    <span
      className={cx(`icon-box content-align-center box-${size}`, className)}
    >
      <FontAwesomeIcon {...props} icon={icon} />
    </span>
  </Render>
);

IconBox.propTypes = propTypes;
IconBox.defaultProps = defaultProps;
