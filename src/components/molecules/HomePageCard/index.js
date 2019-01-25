import PropTypes from 'prop-types';
import React from 'react';
import card1 from '../../../assets/1.png';
import card2 from '../../../assets/2.png';
import card3 from '../../../assets/3.png';
import Card from './Card';

const cards = [card1, card2, card3];

class CardContainer extends React.PureComponent {
    static propTypes = {
        content: PropTypes.arrayOf(PropTypes.shape({
            image: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
            name: PropTypes.string,
        })).isRequired
    };

    render() {
        return (
            <div className="cards-container">
                {
                    this.props.content.map((card, index) =>
                        <Card key={card.name} card={{ ...card, image: cards[index] }} />
                    )
                }
            </div>
        );
    }
}

export default CardContainer;
