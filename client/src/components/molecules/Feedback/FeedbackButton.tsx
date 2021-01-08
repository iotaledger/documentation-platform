import classNames from "classnames";
import React from "react";
import { FeedbackButtonProps } from "./FeedbackButtonProps";

class FeedbackButton extends React.Component<FeedbackButtonProps> {
    public render(): React.ReactNode {
        return (
            <div
                className={
                    classNames(
                        "feedback-button__wrapper",
                        { "feedback-button__wrapper--expanded": this.props.isExpanded }
                    )
                }
            >
                <button
                    type="button"
                    className={
                        classNames(
                            "feedback-button",
                            { "feedback-button--hide-content": !this.props.showButtonContent }
                        )
                    }
                    onClick={e => this.handleOnClick(e)}
                >
                    <span
                        className={
                            classNames(
                                "feedback-button--icon",
                                { "feedback-button--icon-yes": this.props.wasItUseful === "yes" },
                                { "feedback-button--icon-no": this.props.wasItUseful === "no" }
                            )
                        }
                    />
                </button>
            </div>
        );
    }

    private handleOnClick(e: React.MouseEvent): void {
        const { onClick } = this.props;
        if (onClick) {
            onClick(e);
        }
    }
}

export default FeedbackButton;
