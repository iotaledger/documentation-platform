import React, { ReactNode } from "react";
import Image from "../../atoms/Image";
import Link from "../../atoms/Link";
import Text from "../../atoms/Text";
import { CardProps } from "./CardProps";

class Card extends React.PureComponent<CardProps> {
    public render(): ReactNode {
        return (
            <div className="card">
                <Link href={this.props.card.href} className="card__link">
                    <Image src={this.props.card.image} alt={this.props.card.name} className="card__image" />
                    <div className="card__wrapper">
                        <Text className="text--level5 card__label">{this.props.card.name}</Text>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Card;
