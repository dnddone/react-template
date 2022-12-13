import React from 'react';
import PropTypes from 'prop-types';

import { Transition } from '@components';

const propTypes = {
  in: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
const defaultProps = {
  className: 'relative flex-col flex-1',
};

export const WithLoader = ({ in: loading, className, children }) => {
  const content = loading ? <div /> : children;

  return (
    <div className={className}>
      <Transition mountOnEnter unmountOnExit in={loading} className="fade">
        <div className="with-loader content-align-center">Loading...</div>
      </Transition>
      {content}
    </div>
  );
};

WithLoader.propTypes = propTypes;
WithLoader.defaultProps = defaultProps;
