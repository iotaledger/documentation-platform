import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class InputBasic extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { target: { value } } = event;
    this.props.onChange(value);
  }

  render() {
    const { options, id, label, selectedOption, placeholder, required, className } = this.props;

    return (
      <div className="input-wrapper-basic">
        <input type="text" className="input-search-basic" placeholder="Search for topics" />
      </div>
    );
  }
}

export default InputBasic;
