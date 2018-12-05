import React from 'react';
import PropTypes from 'prop-types';

class InputRegister extends React.Component {
  constructor(props) {
    super(props);

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick({ target }) {
  //
  // }

  render() {
    // const { content: { footerSections, footerStaticContent } } = this.props;
    return (
      <div className="input-register-container">
        <input type="text" className="input-register" placeholder="Add your email address" />
        <button className="input-register__button">
          <span className="input-register__button-text">Register</span>
        </button>
      </div>
    )
  }
}

// InputRegister.propTypes = {
//   id: PropTypes.string,
//   large: PropTypes.bool,
//   small: PropTypes.bool,
//   disabled: PropTypes.bool,
//   classNameName: PropTypes.string,
//   onClick: PropTypes.func,
//   children: PropTypes.node,
// };
//
// InputRegister.defaultProps = {
//   classNameName: '',
// };

export default InputRegister;
