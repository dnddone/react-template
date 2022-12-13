import React from 'react';
import PropTypes from 'prop-types';

import { getButtonClassNames, noop } from '@utils';

import { IconBox } from '@components';

const propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
  size: PropTypes.oneOf(['default']),
  color: PropTypes.oneOf(['primary', 'secondary', 'none']),

  /**
   * todo: icon type
   */
  icon: PropTypes.shape(),
  iconClassName: PropTypes.string,
  onClick: PropTypes.func,
};

const defaultProps = {
  theme: false,
  loading: false,
  disabled: false,
  className: '',
  iconClassName: 'text-14 mr-4px',
  type: 'button',
  size: 'default',
  color: 'primary',
  icon: null,
  onClick: noop,
};

export const Button = ({
  children,
  theme,
  loading,
  disabled,
  className,
  iconClassName,
  size,
  color,
  type,
  icon,
  ...props
}) => {
  const isDisabled = loading || disabled;
  const classNames = theme
    ? className
    : getButtonClassNames({
        className,
        color,
        size,
        loading,
        disabled,
      });

  return (
    /* eslint-disable react/button-has-type */
    <button {...props} type={type} disabled={isDisabled} className={classNames}>
      <IconBox className={iconClassName} icon={icon} size="16" />
      {children}
    </button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
