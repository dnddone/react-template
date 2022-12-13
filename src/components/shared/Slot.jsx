import PropTypes from 'prop-types';

const propTypes = {
  slot: PropTypes.node,
  children: PropTypes.node,
};

const defaultProps = {
  slot: null,
  children: null,
};

export const Slot = ({ slot, children }) => {
  if (slot) {
    return slot;
  }

  return children;
};

Slot.propTypes = propTypes;
Slot.defaultProps = defaultProps;
