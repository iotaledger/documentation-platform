import React, { ReactNode } from "react";
import FeedbackButton from "./FeedbackButton";
import FeedbackForm from "./FeedbackForm";
import FeedbackOverlay from "./FeedbackOverlay";
import { FeedbackProps } from "./FeedbackProps";
import { FeedbackState } from "./FeedbackState";

class Feedback extends React.Component<FeedbackProps, FeedbackState> {
    constructor(props: FeedbackProps) {
        super(props);

        this.state = {
            isExpanded: false,
            wasItUseful: undefined,
            showButtonContent: true,
            showForm: false
        };
    }

    public render(): ReactNode {
        return (
            <React.Fragment>
                <FeedbackButton
                    onClick={() => this.handleOnExpand(true)}
                    isExpanded={this.state.isExpanded}
                    showButtonContent={this.state.showButtonContent}
                    wasItUseful={this.state.wasItUseful}
                />
                <FeedbackOverlay isExpanded={this.state.showForm}>
                    {this.state.showForm && (
                        <FeedbackForm
                            onClose={() => this.handleOnExpand(false)}
                            onSubmit={e => this.handleOnSubmit(e)}
                        />
                    )}
                </FeedbackOverlay>
            </React.Fragment>
        );
    }

    private handleOnExpand(expand: boolean): void {
        this.setState({ isExpanded: expand }, () => {
            if (expand) {
                // Hide the button content immediately
                this.setState({ showButtonContent: false });
                setTimeout(() => {
                    this.setState({ showForm: true });
                    // Wait for animation completion before hiding scroll
                    document.body.classList.toggle("no-scroll", true);
                }, 200);
            } else {
                // Hide form straight away
                this.setState({ showForm: false }, () => {
                    // Wait for collapse animation to complete before showing button content
                    setTimeout(() => {
                        this.setState({ showButtonContent: true });
                        // Wait for animation completion before showing scroll
                        document.body.classList.toggle("no-scroll", false);
                    }, 500);
                });
            }
        });
    }

    private handleOnSubmit(e: {
        wasItUseful?: string;
        comments: string;
    }): void {
        this.setState({ wasItUseful: e.wasItUseful });
        const { onSubmit } = this.props;
        if (onSubmit) {
            onSubmit(e);
        }
        this.handleOnExpand(false);
    }
}

export default Feedback;
