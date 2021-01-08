import React, { ReactNode } from "react";
import Cookies from "universal-cookie";
import "./disclaimer.css";
import { DisclaimerState } from "./DisclaimerState";

class Disclaimer extends React.PureComponent<unknown, DisclaimerState> {
    constructor(props: unknown) {
        super(props);

        this.state = {
            ackCookies: true
        };
    }

    /**
     * The component mounted.
     */
    public componentDidMount(): void {
        const cookies = new Cookies();
        const cookieAck = cookies.get("cookieAck");
        this.setState({ ackCookies: cookieAck === "yes" });

        // If the cookie was already acknowledged extend its lifespan
        if (cookieAck === "yes") {
            cookies.set("cookieAck", "yes", { maxAge: 31536000, path: "/" });
        }
    }

    /**
     * Render the component.
     * @returns The node to render.
     */
    public render(): ReactNode {
        return this.state.ackCookies ? null : (
            <div className="disclaimer">
                <div>
                    <span>
                        This website uses cookies to ensure you get the best experience.&nbsp;
                    </span>
                    <a
                        href="https://www.iota.org/research/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn more.
                    </a>
                </div>
                <button
                    type="button"
                    onClick={() => this.dismiss()}
                    className="button"
                >
                    Dismiss
                </button>
            </div>
        );
    }

    /**
     * Dismiss the disclaimer.
     */
    private dismiss(): void {
        const cookies = new Cookies();
        cookies.set("cookieAck", "yes", { maxAge: 31536000, path: "/" });
        this.setState({ ackCookies: true });
    }
}

export default Disclaimer;
