import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getButtonClassNames, noop } from '@utils';

import { IconBox } from '@components';

const propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  theme: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  size: PropTypes.oneOf(['default']),
  color: PropTypes.oneOf(['primary', 'secondary', 'none']),
  external: PropTypes.bool,
  blank: PropTypes.bool,

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
  size: 'default',
  color: 'primary',
  external: false,
  blank: false,
  icon: null,
  onClick: noop,
};

export const Link = ({
  children,
  loading,
  disabled,
  external,
  blank,
  theme,
  className,
  iconClassName,
  size,
  color,
  to,
  icon,
  onClick,
  ...props
}) => {
  const target = blank ? '_blank' : '';
  const classNames = theme
    ? className
    : getButtonClassNames({
        className,
        color,
        size,
        loading,
        disabled,
      });
  const options = {
    ...props,
    className: classNames,
    to,
    target,
  };

  if (external) {
    const linkOptions = {
      ...props,
      className: classNames,
      target,
      href: to,
    };

    return (
      // eslint-disable-next-line react/no-invalid-html-attribute
      <a {...linkOptions} rel="noreferrer nooperer">
        {children}
      </a>
    );
  }

  return (
    <RouterLink {...options}>
      <IconBox className={iconClassName} icon={icon} size="16" />
      {children}
    </RouterLink>
  );
};

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;
