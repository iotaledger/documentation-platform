import classNames from "classnames";
import React, { ReactNode } from "react";
import { FeedbackFormProps } from "./FeedbackFormProps";
import { FeedbackFormState } from "./FeedbackFormState";

class FeedbackForm extends React.Component<FeedbackFormProps, FeedbackFormState> {
    constructor(props: FeedbackFormProps) {
        super(props);

        this.state = {
            wasItUseful: undefined,
            comments: ""
        };
    }

    public render(): ReactNode {
        return (
            <div className="feedback-form__wrapper">
                <form className="feedback-form">
                    <h1>Was this page useful?</h1>
                    <h2>Let us know...</h2>
                    <button
                        type="button"
                        className="feedback-form-close icon-cross"
                        onClick={() => this.handleClose()}
                    />
                    <div>
                        <div
                            className={
                                classNames(
                                    "feedback-form-button",
                                    { "feedback-form-button--selected": this.state.wasItUseful === "yes" }
                                )
                            }
                        >
                            <button
                                type="button"
                                className="feedback-form-button-circle icon-thumb-up"
                                onClick={e => this.handleWasItUseful(e, "yes")}
                            />
                            <button
                                type="button"
                                className="feedback-form-button-label"
                                onClick={e => this.handleWasItUseful(e, "yes")}
                            >
                                Yes
                            </button>
                        </div>
                        <div
                            className={
                                classNames(
                                    "feedback-form-button",
                                    { "feedback-form-button--selected": this.state.wasItUseful === "no" }
                                )
                            }
                        >
                            <button
                                type="button"
                                className="feedback-form-button-circle icon-thumb-down"
                                onClick={e => this.handleWasItUseful(e, "no")}
                            />
                            <button
                                type="button"
                                className="feedback-form-button-label"
                                onClick={e => this.handleWasItUseful(e, "no")}
                            >
                                No
                            </button>
                        </div>
                    </div>
                    <textarea
                        placeholder="Leave additional thoughts or feedback"
                        rows={6}
                        value={this.state.comments}
                        onChange={e => this.setState({ comments: e.target.value })}
                    />
                    <button
                        type="button"
                        className="feedback-form-button-submit"
                        onClick={e => this.handleOnSubmit(e)}
                        disabled={this.state.wasItUseful === undefined}
                    >
                        Submit Page Feedback
                    </button>
                </form>
            </div>
        );
    }

    private handleClose(): void {
        const { onClose } = this.props;
        if (onClose) {
            onClose();
        }
    }

    private handleOnSubmit(e: React.FormEvent): void {
        const { onSubmit } = this.props;
        if (onSubmit) {
            onSubmit({
                wasItUseful: this.state.wasItUseful,
                comments: this.state.comments
            });
        }
        e.preventDefault();
    }

    private handleWasItUseful(e: React.MouseEvent, wasItUseful: string): void {
        this.setState({ wasItUseful });
        e.preventDefault();
    }
}

export default FeedbackForm;
