import classnames from "classnames";
import React, { Component, ReactNode } from "react";
import { MessageBoxProps } from "./MessageBoxProps";

/**
 * Component to display a message box.
 */
class MessageBox extends Component<MessageBoxProps> {
    public render(): ReactNode {
        return (
            <div
                className={classnames(
                    "message-box",
                    { "message-box__success": this.props.type === "success" },
                    { "message-box__danger": this.props.type === "danger" },
                    { "message-box__info": this.props.type === "info" },
                    { "message-box__warning": this.props.type === "warning" }
                )}
            >
                <div className="message-box--icon" />
                <div className="message-box--text">
                    {this.props.title && (
                        <div className="message-box--title">{this.props.title}</div>
                    )}
                    {this.props.content && (
                        <div className="message-box--content">
                            {this.props.content}
                        </div>
                    )}
                </div>
            </div>);
    }
}

export default MessageBox;
