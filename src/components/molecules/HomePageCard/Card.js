import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atoms/Link';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';

class Card extends React.PureComponent {
    static propTypes = {
        card: PropTypes.exact({
            image: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            text: PropTypes.string,
        }).isRequired
    };

    render() {
        return (
            <div className="card">
                <Link href={this.props.card.href} className="card__link">
                    <Image src={this.props.card.image} alt={this.props.card.alt} className="card__image" />
                    <div className="card__wrapper">
                        <Text className="text--level5 card__label">{this.props.card.text}</Text>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Card;
