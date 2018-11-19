import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ id, text, className, children }) => {
  if (text) {
    return (
      <label htmlFor={id} className={`control-label ${className}`}>
        {children || text}
      </label>
    );
  }
  return null;
}

Label.propTypes = {
  id: PropTypes.string,
  text: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Label;
