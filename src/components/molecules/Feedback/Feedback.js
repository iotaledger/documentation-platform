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
      showButtonContent: true,
      showForm: false
    };

    this.handleOnExpand = this.handleOnExpand.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnExpand(expand) {
    this.setState({ isExpanded: expand }, () => {
      if (expand) {
        // Show the form and hide the button content immediately
        this.setState({ showForm: true, showButtonContent: false });
        // Wait for animation completion before hiding scroll
        setTimeout(() => {
          document.body.classList.toggle('no-scroll', true);
        }, 500);
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
    const { onSubmit } = this.props;
    if (onSubmit) {
      onSubmit(e);
    }
    this.handleOnExpand(false);
  }

  render() {
    return (
      <div style={this.props.styles}>
        <FeedbackButton
          onClick={() => this.handleOnExpand(true)}
          isExpanded={this.state.isExpanded}
          showButtonContent={this.state.showButtonContent} />
        {this.state.showForm && (
          <FeedbackOverlay onClose={() => this.handleOnExpand(false)}>
            <FeedbackForm onSubmit={this.handleOnSubmit} />
          </FeedbackOverlay>
        )}
      </div>
    )
  }
}

export default Feedback;
