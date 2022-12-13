import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Transition } from '@components';

const propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.string,
};

const defaultProps = {
  className: '',
  error: null,
  children: null,
};

export const FieldError = ({ className, error, children }) => {
  const content = children || error;

  return (
    <Transition mountOnEnter unmountOnExit in={!!content} className="fade">
      <p
        className={cx('field-error overflow-ellipsis', className)}
        title={content}
      >
        {content}
      </p>
    </Transition>
  );
};

FieldError.displayName = 'Field.Error';
FieldError.propTypes = propTypes;
FieldError.defaultProps = defaultProps;
