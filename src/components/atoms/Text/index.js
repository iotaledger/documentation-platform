import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children, className }) => (
  <span className={`text ${className}`}>{children}</span>
)

Text.propTypes = {
  children: PropTypes.node,
  classNames: PropTypes.string,
};

Text.defaultProps = {
  className: '',
};

export default Text;
