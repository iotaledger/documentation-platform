import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ children, className }) => (
  <p className={`paragraph ${className}`}>{children}</p>
)

Text.propTypes = {
  children: PropTypes.node,
  classNames: PropTypes.string,
};

export default Paragraph;
