import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// <HeadingLabel />
// <HeadingLabel style="primary" />

class HeadingLabel extends React.Component {
  static propTypes = {
    style: PropTypes.string
  };

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        className={
          classNames(
            'heading-label',
            { 'heading-label--secondary': this.props.style === "secondary" }
          )
        }>
        {this.props.children}
      </div>
    )
  }
}

export default HeadingLabel;
