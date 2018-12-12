import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import api from '../../../utils/api';
import Paragraph from '../../atoms/Paragraph';

class InputRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      loading: false,
      success: false,
      apiMessage: null,
      error: null,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleInputChange({ target }) {
    this.setState({ email: target.value, error: null });
  }

  async submit(e) {
    e.preventDefault();
    const { captcha, loading, email } = this.state;

    if (!email) {
      return this.setState({ error: 'Please provide valid email' });
    }

    const validate = this.validateEmail(email)

    if (this.validateEmail(email)) {
      this.setState({ loading: true }, async () => {
        const response = await api('submitEmail', { email });
        this.setState({ success: true, loading: false, apiMessage: response.message });
      });
    } else {
      this.setState({ error: 'Please provide valid email' })
    }
  }

  validateEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  }

  render() {
    const { email, error, success, apiMessage } = this.state;
    return (
      <div className="input-register-container">
        <div className="input-register-container__wrapper">
          <form
            onSubmit={this.submit}
            className={classNames('input-register-container__form', { 'hidden': success })}
          >
            <input
              type="email"
              className="input-register"
              placeholder="Add your email address"
              value={email}
              onChange={this.handleInputChange}
            />
            <button className="input-register__button" type="submit">
              <span className="input-register__button-text">Register</span>
            </button>
          </form>
          <Paragraph className={classNames('error-message', { 'hidden': !error || success })}>
            { error }
          </Paragraph>
          <Paragraph className={classNames('success-message', { 'hidden': !success })}>
            { apiMessage }
          </Paragraph>
        </div>
      </div>
    )
  }
}

export default InputRegister;
