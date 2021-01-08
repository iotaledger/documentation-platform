import React, { ReactNode } from "react";
import Card from "./Card";
import { CardContainerProps } from "./CardContainerProps";

class CardContainer extends React.PureComponent<CardContainerProps> {
    public render(): ReactNode {
        return (
            <div className="cards-container">
                {
                    this.props.content.map(card =>
                        <Card key={card.name} card={{ ...card }} />
                    )
                }
            </div>
        );
    }
}

export default CardContainer;
