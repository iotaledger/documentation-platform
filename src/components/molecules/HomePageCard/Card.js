import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atoms/Link';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';

const Card = ({ card: { image, href, alt, text } }) => (
  <div className="card">
    <Link href={href} className="card__link">
      <Image src={image} alt={alt} className="card__image" />
      <div className="card__wrapper">
        <Text className="text--level5 card__label">{text}</Text>
      </div>
    </Link>
  </div>
);

Card.propTypes = {
  card: PropTypes.exact({
    image: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    text: PropTypes.string,
  }),
};

export default Card;
