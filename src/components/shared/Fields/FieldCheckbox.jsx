import React from 'react';
import { faCheck } from '@fortawesome/pro-solid-svg-icons';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { IconBox, Render } from '@components';

const propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  error: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  className: '',
  error: '',
  text: '',
  children: null,
};

export const FieldCheckbox = React.forwardRef(
  ({ name, className = '', error, text, children, ...props }, ref) => (
    <div className="field-container field-checkbox-container relative">
      <input
        {...props}
        type="checkbox"
        ref={ref}
        id={name}
        className={cx('field-checkbox hidden', className, { error })}
        name={name}
      />
      <label htmlFor={name} className="content-align-center">
        <IconBox
          className="field-checkbox-check-container content-align-center mr-1"
          icon={faCheck}
        />
        <Render if={children || text}>
          <p className="field-checkbox-text">{children || text}</p>
        </Render>
      </label>
    </div>
  )
);

FieldCheckbox.displayName = 'Field.Checkbox';
FieldCheckbox.propTypes = propTypes;
FieldCheckbox.defaultProps = defaultProps;
