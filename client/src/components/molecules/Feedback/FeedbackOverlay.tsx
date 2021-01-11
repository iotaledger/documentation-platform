import classNames from "classnames";
import React, { ReactNode } from "react";
import { FeedbackOverlayProps } from "./FeedbackOverlayProps";

class FeedbackOverlay extends React.Component<FeedbackOverlayProps> {
    public render(): ReactNode {
        return (
            <div className={
                classNames(
                    "feedback-overlay",
                    { "feedback-overlay--expanded": this.props.isExpanded }
                )
            }
            >
                {this.props.children}
            </div>
        );
    }
}
export default FeedbackOverlay;
