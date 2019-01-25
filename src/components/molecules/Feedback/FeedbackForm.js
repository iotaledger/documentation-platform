import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class FeedbackForm extends React.Component {
    static propTypes = {
        onClose: PropTypes.func,
        onSubmit: PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.state = {
            wasItUseful: undefined,
            comments: ''
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleYesNo = this.handleWasItUseful.bind(this);
    }

    handleClose() {
        const { onClose } = this.props;
        if (onClose) {
            onClose();
        }
    }

    handleOnSubmit(e) {
        const { onSubmit } = this.props;
        if (onSubmit) {
            onSubmit({
                wasItUseful: this.state.wasItUseful,
                comments: this.state.comments
            });
        }
        e.preventDefault();
    }

    handleWasItUseful(e, wasItUseful) {
        this.setState({ wasItUseful });
        e.preventDefault();
    }

    render() {
        return (
            <div className="feedback-form__wrapper">
                <form className="feedback-form">
                    <h1>Was this page useful?</h1>
                    <h2>Let us know...</h2>
                    <button
                        className="feedback-form-close"
                        onClick={this.handleClose}>
                        <i className="icon icon-cross"></i>
                    </button>
                    <div>
                        <div
                            className={
                                classNames(
                                    'feedback-form-button',
                                    { 'feedback-form-button--selected': this.state.wasItUseful === 'yes' }
                                )
                            }>
                            <button
                                className="feedback-form-button-circle"
                                onClick={(e) => this.handleWasItUseful(e, 'yes')}>
                                <i className="icon icon-thumb-up"></i>
                            </button>
                            <button
                                className="feedback-form-button-label"
                                onClick={(e) => this.handleWasItUseful(e, 'yes')}>
                                Yes
                            </button>
                        </div>
                        <div
                            className={
                                classNames(
                                    'feedback-form-button',
                                    { 'feedback-form-button--selected': this.state.wasItUseful === 'no' }
                                )
                            }>
                            <button
                                className="feedback-form-button-circle"
                                onClick={(e) => this.handleWasItUseful(e, 'no')}>
                                <i className="icon icon-thumb-down"></i>
                            </button>
                            <button
                                className="feedback-form-button-label"
                                onClick={(e) => this.handleWasItUseful(e, 'no')}>
                                No
                            </button>
                        </div>
                    </div>
                    <textarea
                        placeholder="Leave additional thoughts or feedback"
                        rows="6"
                        value={this.state.comments}
                        onChange={(e) => this.setState({ comments: e.target.value })}
                    ></textarea>
                    <button
                        className="feedback-form-button-submit"
                        onClick={this.handleOnSubmit}
                        disabled={this.state.wasItUseful === undefined}>
                        Submit Page Feedback
                    </button>
                </form>
            </div>
        );
    }
}

export default FeedbackForm;
