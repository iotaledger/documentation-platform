import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Text from '../Text';

const Link = ({ id, href, target, text, className, children }) => (
  <a
    id={id}
    target={target}
    href={href}
    rel={target === '_blank' ? 'noopener noreferrer' : false}
    className={`link ${className}`}
  >
    <Text>{children || text}</Text>
  </a>
);

Link.propTypes = {
  id: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Link.defaultProps = {
  target: '_blank',
  className: '',
};

export default Link;
