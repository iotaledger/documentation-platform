import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children, className, html }) => {
  if (html) {
    // eslint-disable-next-line react/no-danger
    return <span className={`text ${className}`} dangerouslySetInnerHTML={{ __html: children }} />;
  }

  return <span className={`text ${className}`}>{children}</span>
};

Text.propTypes = {
  children: PropTypes.node,
  classNames: PropTypes.string,
  html: PropTypes.bool,
};

Text.defaultProps = {
  className: '',
  html: false,
};

export default Text;
