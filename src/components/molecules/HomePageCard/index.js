import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import card1 from "../../../assets/1.png";
import card2 from "../../../assets/2.png";
import card3 from "../../../assets/3.png";

const cards = [card1, card2, card3]

const CardContainer = ({ content }) => (
  <div className="cards-container">
    {
      content.map((card, index) =>
        <Card key={card.text} card={{...card, image: cards[index]}}/>
      )
    }
  </div>
);

CardContainer.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    text: PropTypes.string,
  }))
};

export default CardContainer;
