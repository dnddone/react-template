import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Render } from '@components';

const propTypes = {
  for: PropTypes.string.isRequired,
  required: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  required: false,
  className: '',
  label: '',
  children: null,
};

export const FieldLabel = ({
  for: htmlFor,
  required,
  className,
  label,
  children,
}) => {
  const content = children || label;

  return (
    <Render if={content}>
      <label
        className={cx('field-label block', className, {
          'label-required': required,
        })}
        htmlFor={htmlFor}
      >
        {content}
      </label>
    </Render>
  );
};

FieldLabel.displayName = 'Field.Label';
FieldLabel.propTypes = propTypes;
FieldLabel.defaultProps = defaultProps;
