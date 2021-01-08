import classNames from "classnames";
import React, { ReactNode } from "react";
import { HeadingProps } from "./HeadingProps";

class Heading extends React.PureComponent<HeadingProps> {
    public render(): ReactNode {
        return React.createElement(
            `h${this.props.level ?? 1}`,
            {
                className: classNames("heading", this.props.className),
                id: this.props.id
            },
            this.props.children || this.props.text
        );
    }
}

export default Heading;
