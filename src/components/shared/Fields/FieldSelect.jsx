import React from 'react';
import { faChevronDown } from '@fortawesome/pro-solid-svg-icons';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { noop } from '@utils';

import { Field, IconBox } from '@components';

const propTypes = {
  name: PropTypes.string.isRequired,
  requiredLabel: PropTypes.bool,
  wide: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func,
};

const defaultProps = {
  requiredLabel: false,
  wide: true,
  disabled: false,
  defaultValue: null,
  className: '',
  label: '',
  error: '',
  children: null,
  onChange: noop,
};

export const FieldSelect = React.forwardRef(
  (
    {
      requiredLabel,
      wide,
      disabled,
      defaultValue,
      name,
      className,
      label,
      error,
      children,
      ...props
    },
    ref
  ) => (
    <div>
      <Field.Label required={requiredLabel} for={name}>
        {label}
      </Field.Label>
      <div
        className={cx('field-select-container align-center relative', {
          disabled,
        })}
      >
        <select
          {...props}
          className={cx('field-select font-medium h-full', className, {
            error,
            disabled,
            'w-full': wide,
          })}
          ref={ref}
          name={name}
          id={name}
          disabled={disabled}
        >
          {children}
        </select>
        <IconBox
          icon={faChevronDown}
          className="field-select-chevron primary-1"
        />
        <Field.Error error={error} />
      </div>
    </div>
  )
);

FieldSelect.propTypes = propTypes;
FieldSelect.defaultProps = defaultProps;
