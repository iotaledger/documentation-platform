import PropTypes from 'prop-types';
import React from 'react';
import FeedbackButton from './FeedbackButton';
import FeedbackForm from './FeedbackForm';
import FeedbackOverlay from './FeedbackOverlay';

class Feedback extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func
  };

  constructor(props) {
    super(props)

    this.state = {
      isExpanded: false,
      wasItUseful: undefined,
      showButtonContent: true,
      showForm: false
    };

    this.handleOnExpand = this.handleOnExpand.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnExpand(expand) {
    this.setState({ isExpanded: expand }, () => {
      if (expand) {
        // Hide the button content immediately
        this.setState({ showButtonContent: false });
        setTimeout(() => {
          this.setState({ showForm: true });
          // Wait for animation completion before hiding scroll
          document.body.classList.toggle('no-scroll', true);
        }, 200);
      } else {
        // Hide form straight away
        this.setState({ showForm: false }, () => {
          // Wait for collapse animation to complete before showing button content
          setTimeout(() => {
            this.setState({ showButtonContent: true })
            // Wait for animation completion before showing scroll
            document.body.classList.toggle('no-scroll', false);
          }, 500);
        });
      }
    });
  }

  handleOnSubmit(e) {
    this.setState({ wasItUseful: e.wasItUseful });
    const { onSubmit } = this.props;
    if (onSubmit) {
      onSubmit(e);
    }
    this.handleOnExpand(false);
  }

  render() {
    return (
      <React.Fragment>
        <FeedbackButton
          onClick={() => this.handleOnExpand(true)}
          isExpanded={this.state.isExpanded}
          showButtonContent={this.state.showButtonContent}
          wasItUseful={this.state.wasItUseful} />
        <FeedbackOverlay onClose={() => this.handleOnExpand(false)} isExpanded={this.state.showForm}>
          {this.state.showForm && (
            <FeedbackForm onSubmit={this.handleOnSubmit} />
          )}
        </FeedbackOverlay>
      </React.Fragment>
    )
  }
}

export default Feedback;
