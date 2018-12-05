import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ children, className }) => (
  <p className={`paragraph ${className}`}>{children}</p>
)

Paragraph.propTypes = {
  children: PropTypes.node,
  classNames: PropTypes.string,
};

Paragraph.defaultProps = {
  className: '',
};

export default Paragraph;
