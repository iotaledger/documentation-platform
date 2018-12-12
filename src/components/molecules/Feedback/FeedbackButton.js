import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class FeedbackButton extends React.Component {
  static propTypes = {
    isExpanded: PropTypes.bool,
    showButtonContent: PropTypes.bool,
    onClick: PropTypes.func
  };

  constructor(props) {
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    const { onClick } = this.props;
    if (onClick) {
      onClick(e);
    }
  }

  render() {
    return (
      <div
        className={
          classNames(
            'feedback-button__wrapper',
            { 'feedback-button__wrapper--expanded': this.props.isExpanded }
          )
        }>
        <button
          className={
            classNames(
              'feedback-button',
              { 'feedback-button--hide-content': !this.props.showButtonContent }
            )
          }
          onClick={this.handleOnClick}>
          <span className="feedback-button--icon"></span>
        </button>
      </div>
    )
  }
}

export default FeedbackButton;
