import classNames from "classnames";
import React, { ReactNode } from "react";
import { HeadingLabelProps } from "./HeadingLabelProps";

class HeadingLabel extends React.Component<HeadingLabelProps> {
    public render(): ReactNode {
        return (
            <div
                className={
                    classNames(
                        "heading-label",
                        { "heading-label--secondary": this.props.style === "secondary" }
                    )
                }
                id={this.props.id}
            >
                {this.props.children}
            </div>
        );
    }
}

export default HeadingLabel;
