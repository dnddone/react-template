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
  resizable: PropTypes.bool,
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
  resizable: true,
  className: '',
  label: '',
  before: '',
  after: '',
  error: '',
  type: 'text',
};

export const FieldTextarea = React.forwardRef(
  (
    {
      name,
      requiredLabel,
      wide,
      disabled,
      resizable,
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
      <textarea
        {...props}
        ref={ref}
        id={name}
        className={cx('field-textarea', className, {
          error,
          disabled,
          'w-full': wide,
          resizable,
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

FieldTextarea.displayName = 'Field.Input';
FieldTextarea.propTypes = propTypes;
FieldTextarea.defaultProps = defaultProps;
