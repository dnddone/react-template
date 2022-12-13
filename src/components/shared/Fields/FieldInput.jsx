import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { InputType } from '@types';

import { Field, Render } from '@components';

const propTypes = {
  name: PropTypes.string.isRequired,
  requiredLabel: PropTypes.bool,
  wide: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string,
  before: PropTypes.string,
  after: PropTypes.string,
  error: PropTypes.string,
  type: InputType,
};

const defaultProps = {
  requiredLabel: false,
  wide: true,
  disabled: false,
  className: '',
  label: '',
  before: '',
  after: '',
  error: '',
  type: 'text',
};

export const FieldInput = React.forwardRef(
  (
    {
      name,
      requiredLabel,
      wide,
      disabled,
      className = '',
      label,
      before,
      after,
      error,
      ...props
    },
    ref
  ) => (
    <div className="field-container">
      <Field.Label required={requiredLabel} for={name}>
        {label}
      </Field.Label>
      <Render if={before}>
        <span className="field-before grey-4 text-14 font-500">{before}</span>
      </Render>
      <input
        {...props}
        ref={ref}
        id={name}
        className={cx('field-input', className, {
          error,
          disabled,
          'w-full': wide,
        })}
        name={name}
        disabled={disabled}
      />
      <Render if={after}>
        <span className="field-after grey-4 text-14 font-500">{after}</span>
      </Render>
      <Field.Error error={error} />
    </div>
  )
);

FieldInput.displayName = 'Field.Input';
FieldInput.propTypes = propTypes;
FieldInput.defaultProps = defaultProps;
