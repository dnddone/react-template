import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Render } from '@components';

const propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  className: '',
  children: null,
};

export const FieldFile = React.forwardRef(
  ({ name, className, children, ...props }, ref) => (
    <label htmlFor={name} className={cx('cursor-pointer', className)}>
      <Render if={children}>{children}</Render>
      <input
        {...props}
        type="file"
        ref={ref}
        name={name}
        id={name}
        className="hidden"
      />
    </label>
  )
);

FieldFile.displayName = 'Field.File';
FieldFile.propTypes = propTypes;
FieldFile.defaultProps = defaultProps;
