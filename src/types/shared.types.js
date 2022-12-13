import PropTypes from 'prop-types';

export const BoxSize = PropTypes.oneOf([16, 24, 32, 40, 48, 64]);

export const InputType = PropTypes.oneOf(['text', 'password', 'email']);

export const BadgeColor = PropTypes.oneOf([
  'yellow',
  'green',
  'grey',
  'red',
  'blue',
]);
