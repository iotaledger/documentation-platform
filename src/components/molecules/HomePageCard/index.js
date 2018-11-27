import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atoms/Link';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';

const HomePageCard = ({ id, className, content: { image, href, alt, text } }) => (
  <div id={id} className={`card ${className}`}>
    <Link href={href} className="card__link">
      <Image src={image} alt={alt} className="card__image" />
      <div className="card__wrapper">
        <Text className="text--level5 card__label" >{text}</Text>
      </div>
    </Link>
  </div>
);

HomePageCard.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.exact({
    image: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    text: PropTypes.string,
  }),
};

HomePageCard.defaultProps = {
  className: '',
};

export default HomePageCard;
