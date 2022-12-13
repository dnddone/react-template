import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  mountOnEnter: PropTypes.bool,
  unmountOnExit: PropTypes.bool,
  timeout: PropTypes.number,
  className: PropTypes.string,
};
const defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  timeout: 300,
  className: '',
};

export const Transition = ({
  mountOnEnter,
  unmountOnExit,
  className,
  children,
  ...props
}) => (
  <CSSTransition
    {...props}
    mountOnEnter={mountOnEnter}
    unmountOnExit={unmountOnExit}
    classNames={className}
  >
    {children}
  </CSSTransition>
);

Transition.propTypes = propTypes;
Transition.defaultProps = defaultProps;
