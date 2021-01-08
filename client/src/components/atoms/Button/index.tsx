import classNames from "classnames";
import React, { ReactNode } from "react";
import { ButtonProps } from "./ButtonProps";

class Button extends React.PureComponent<ButtonProps> {
    public render(): ReactNode {
        return (
            <button
                type="button"
                id={this.props.id}
                onClick={this.props.onClick}
                disabled={this.props.disabled}
                className={
                    classNames("button",
                        this.props.className,
                        {
                            "button--large": this.props.large,
                            "button--small": this.props.small,
                            "button--disabled": this.props.disabled
                        })
                }
            >
                {this.props.children}
            </button>
        );
    }
}

export default Button;
