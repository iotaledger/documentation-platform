import classNames from "classnames";
import React, { ReactNode } from "react";
import { submitEmail } from "../../../utils/api";
import { InputRegisterProps } from "./InputRegisterProps";
import { InputRegisterState } from "./InputRegisterState";

class InputRegister extends React.Component<InputRegisterProps, InputRegisterState> {
    constructor(props: InputRegisterProps) {
        super(props);
        this.state = {
            email: "",
            loading: false,
            success: false,
            apiMessage: null,
            error: null
        };
    }

    public render(): ReactNode {
        const { email, error, success, apiMessage, loading } = this.state;
        return (
            <div className="input-register-container__wrapper">
                <form
                    onSubmit={async e => this.submit(e)}
                    className={classNames("input-register-container__form")}
                    noValidate
                >
                    <div
                        className={
                            classNames("input-register-container", { "input-register-container--hidden": success })
                        }
                    >
                        <input
                            type="email"
                            className="input-register"
                            placeholder="Add your email address"
                            value={email}
                            disabled={loading}
                            onChange={e => this.handleInputChange(e.target.value)}
                        />
                        <button className="input-register__button" type="submit" disabled={loading}>
                            <span className="input-register__button-text">Register</span>
                        </button>
                    </div>
                    <div className="error-message">
                        {error}
                    </div>
                    <div className={classNames("success-message", { "hidden": !success })}>
                        {apiMessage}
                    </div>
                </form>
            </div>
        );
    }

    private handleInputChange(value: string): void {
        this.setState({ email: value, error: null });
    }

    private async submit(e: React.FormEvent): Promise<void> {
        e.preventDefault();

        const { email } = this.state;

        if (!email || !this.validateEmail(email)) {
            this.setState({ error: "Please provide a valid e-mail address." });
        } else {
            this.setState({ loading: true }, async () => {
                const response = await submitEmail(this.props.apiEndpoint, email);
                this.setState({ success: response.success, loading: false, apiMessage: response.message });
            });
        }
    }

    private validateEmail(email: string): boolean {
        // eslint-disable-next-line max-len
        const regex = /^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\dA-Za-z-]+\.)+[A-Za-z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }
}

export default InputRegister;
