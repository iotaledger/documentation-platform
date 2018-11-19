import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children, className }) => (
  <span className={`text ${className}`}>{children}</span>
)

Text.propTypes = {
  children: PropTypes.node,
  classNames: PropTypes.string,
};

export default Text;
