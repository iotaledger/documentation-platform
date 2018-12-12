import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class FeedbackOverlay extends React.Component {
  static propTypes = {
    onClose: PropTypes.func
  };

  constructor(props) {
    super(props)

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    const { onClose } = this.props;
    if (onClose) {
      onClose();
    }
  }

  render() {
    return (
      <div className={
        classNames(
          'feedback-overlay',
          { 'feedback-overlay--expanded': this.props.isExpanded }
        )
      }>
        <button
          className="feedback-overlay-close"
          onClick={this.handleClose}>
          <i className="fa fa-times fa-2x"></i>
        </button>
        {this.props.children}
      </div>
    )
  }
}
export default FeedbackOverlay;
