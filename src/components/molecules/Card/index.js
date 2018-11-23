import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atoms/Link';
import Image from '../../atoms/Image';
import Heading from '../../atoms/Heading';

const Card = ({ id, className, content: { image, href, alt, text } }) => (
  <div id={id} className={`card ${className}`}>
    <Link href={href}>
      <Image src={image} alt={alt} />
      <Heading level={4} text={text} />
    </Link>
  </div>
);

Card.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.exact({
    image: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    text: PropTypes.string,
  }),
};

Card.defaultProps = {
  className: '',
};

export default Card;
