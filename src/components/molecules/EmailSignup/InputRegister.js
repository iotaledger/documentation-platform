import classNames from 'classnames';
import React from 'react';
import { submitEmail } from '../../../utils/api';

class InputRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            loading: false,
            success: false,
            apiMessage: null,
            error: null,
            diabled: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleInputChange({ target }) {
        this.setState({ email: target.value, error: null });
    }

    async submit(e) {
        e.preventDefault();

        const { email } = this.state;

        if (!email || !this.validateEmail(email)) {
            this.setState({ error: 'Please provide a valid e-mail address.' });
        } else {
            this.setState({ loading: true }, async () => {
                const response = await submitEmail(email);
                this.setState({ success: response.success, loading: false, apiMessage: response.message });
            });
        }
    }

    validateEmail(email) {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }

    render() {
        const { email, error, success, apiMessage, loading } = this.state;
        return (
            <div className="input-register-container__wrapper">
                <form
                    onSubmit={this.submit}
                    className={classNames('input-register-container__form')}
                    noValidate
                >
                    <div
                        className={classNames('input-register-container', { 'input-register-container--hidden': success })}>
                        <input
                            type="email"
                            className="input-register"
                            placeholder="Add your email address"
                            value={email}
                            disabled={loading}
                            onChange={this.handleInputChange}
                        />
                        <button className="input-register__button" type="submit" disabled={loading}>
                            <span className="input-register__button-text">Register</span>
                        </button>
                    </div>
                    <div className="error-message">
                        {error}
                    </div>
                    <div className={classNames('success-message', { 'hidden': !success })}>
                        {apiMessage}
                    </div>
                </form>
            </div>
        );
    }
}

export default InputRegister;
