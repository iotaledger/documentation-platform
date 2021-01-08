import classNames from "classnames";
import React, { ReactNode } from "react";
import Text from "../Text";
import { LinkProps } from "./LinkProps";

class Link extends React.PureComponent<LinkProps> {
    public render(): ReactNode {
        return (
            <a
                id={this.props.id}
                target={this.props.target}
                href={this.props.href}
                rel={this.props.target === "_blank" ? "noopener noreferrer" : undefined}
                className={classNames("link", this.props.className, { "disabled": this.props.disabled })}
            >
                {this.props.children || <Text>{this.props.text}</Text>}
            </a>
        );
    }
}


export default Link;
