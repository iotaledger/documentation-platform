import PropTypes from 'prop-types';
import React from 'react';
import Card from './Card';

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
                    this.props.content.map((card) =>
                        <Card key={card.name} card={{ ...card }} />
                    )
                }
            </div>
        );
    }
}

export default CardContainer;
