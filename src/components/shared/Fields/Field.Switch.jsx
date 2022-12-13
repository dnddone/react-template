import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  error: PropTypes.string,
};

const defaultProps = {
  className: '',
  error: '',
};

export const FieldSwitch = React.forwardRef(
  ({ name, className = '', error, ...props }, ref) => (
    <label htmlFor={name} className="field-switch-container relative">
      <input
        {...props}
        type="checkbox"
        ref={ref}
        id={name}
        className={cx('field-switch hidden', className, { error })}
        name={name}
      />
      <div className="field-switch-slider" />
    </label>
  )
);

FieldSwitch.displayName = 'Field.Switch';
FieldSwitch.propTypes = propTypes;
FieldSwitch.defaultProps = defaultProps;
