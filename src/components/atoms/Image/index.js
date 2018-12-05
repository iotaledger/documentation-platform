import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ id, alt, src, className }) => (
  <img id={id} src={src} alt={alt} className={`image ${className}`} />
);

Image.propTypes = {
  id: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Image.defaultProps = {
  className: '',
};

export default Image;
