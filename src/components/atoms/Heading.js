
import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ level = 1, children, text, className }) =>
  React.createElement(
    `h${level}`,
    { className: `heading text ${className}` },
    children || <React.Fragment>{text}</React.Fragment>
  );

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
  text: PropTypes.string,
  className: PropTypes.string,
};

Heading.defaultProps = {
  className: '',
};

export default Heading;
