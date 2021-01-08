import classNames from "classnames";
import React, { ReactNode } from "react";
import { LabelProps } from "./LabelProps";

class Label extends React.PureComponent<LabelProps> {
    public render(): ReactNode {
        if (this.props.text) {
            return (
                <label htmlFor={this.props.id} className={classNames("control-label", this.props.className)}>
                    {this.props.children || this.props.text}
                </label>
            );
        }
        return null;
    }
}

export default Label;
