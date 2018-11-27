import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';

const Heading = ({ level = 1, children, text, className }) =>
  React.createElement(
    `h${level}`,
    { className: `heading ${className}` },
    children || <Text>{text}</Text>
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
